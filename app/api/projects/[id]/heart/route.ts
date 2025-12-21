import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = req.headers.get("x-user-id")!;
        const projectId = params.id;

        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { heartedBy: { where: { id: userId } } }
        });

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        const hasHearted = project.heartedBy.length > 0;

        if (hasHearted) {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    hearts: { decrement: 1 },
                    heartedBy: { disconnect: { id: userId } }
                }
            });
            return NextResponse.json({ hearted: false });
        } else {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    hearts: { increment: 1 },
                    heartedBy: { connect: { id: userId } }
                }
            });
            return NextResponse.json({ hearted: true });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to heart" }, { status: 500 });
    }
}