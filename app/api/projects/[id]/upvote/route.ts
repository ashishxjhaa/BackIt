import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest, { params }: { params: { id: string } }) {
    try {
        const userId = req.headers.get("x-user-id")!;
        const projectId = params.id;

        const project = await prisma.project.findUnique({
            where: { id: projectId },
            include: { upvotedBy: { where: { id: userId } } }
        });

        if (!project) {
            return NextResponse.json({ error: "Project not found" }, { status: 404 });
        }

        const hasUpvoted = project.upvotedBy.length > 0;

        if (hasUpvoted) {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    upvotes: { decrement: 1 },
                    upvotedBy: { disconnect: { id: userId } }
                }
            });
            return NextResponse.json({ upvoted: false });
        } else {
            await prisma.project.update({
                where: { id: projectId },
                data: {
                    upvotes: { increment: 1 },
                    upvotedBy: { connect: { id: userId } }
                }
            });
            return NextResponse.json({ upvoted: true });
        }
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to upvote" }, { status: 500 });
    }
}