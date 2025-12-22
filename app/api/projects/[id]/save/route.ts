import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    try {
        const userId = req.headers.get("x-user-id")!;
        const { id: projectId } = await params;

        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { savedBy: { where: { id: userId } } }
        });

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        const hasSaved = project.savedBy.length > 0;

        if (hasSaved) {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    saves: { decrement: 1 },
                    savedBy: { disconnect: { id: userId } }
                }
            });
            return NextResponse.json({ saved: false });
        } else {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    saves: { increment: 1 },
                    savedBy: { connect: { id: userId } }
                }
            });
            return NextResponse.json({ saved: true });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to save" }, { status: 500 });
    }
}