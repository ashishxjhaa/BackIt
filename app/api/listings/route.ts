import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id");

        const projects = await prisma.project.findMany({
            include: { 
                user: { select: { fullName: true } },
                upvotedBy: userId ? { where: { id: userId } } : false,
                heartedBy: userId ? { where: { id: userId } } : false,
                savedBy: userId ? { where: { id: userId } } : false,
            },
            orderBy: { createdAt: 'desc' }
        });

        const projectsWithFlags = projects.map((p: typeof projects[0]) => ({
            ...p,
            hasUpvoted: p.upvotedBy?.length > 0,
            hasHearted: p.heartedBy?.length > 0,
            hasSaved: p.savedBy?.length > 0,
        }));

        return NextResponse.json({ projects: projectsWithFlags });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
