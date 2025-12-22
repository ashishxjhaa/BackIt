import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id")!;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                savedProjects: {
                    include: { 
                        user: { select: { fullName: true } },
                        upvotedBy: { where: { id: userId } },
                        heartedBy: { where: { id: userId } },
                        savedBy: { where: { id: userId } },
                    },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });

        const projectsWithFlags = user?.savedProjects.map((p: typeof user.savedProjects[0]) => ({
            ...p,
            hasUpvoted: p.upvotedBy.length > 0,
            hasHearted: p.heartedBy.length > 0,
            hasSaved: p.savedBy.length > 0,
        })) || [];

        return NextResponse.json({ projects: projectsWithFlags });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
