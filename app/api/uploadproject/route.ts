import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
    try {
        const { name, description, link, logoUrl, tags, userId } = await req.json();

        const project = await prisma.project.create({
            data: {
                name,
                description,
                link,
                logoUrl,
                tags,
                userId,
            },
        });

        return NextResponse.json({ success: true, project });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ success: false, error: "Failed to upload" }, { status: 500 });
    }
}

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id")!

        const projects = await prisma.project.findMany({
            where: { userId },
            include: {
                upvotedBy: { where: { id: userId } },
                heartedBy: { where: { id: userId } },
                savedBy: { where: { id: userId } },
            },
            orderBy: { createdAt: 'desc' }
        });

        const projectsWithFlags = projects.map(p => ({
            ...p,
            hasUpvoted: p.upvotedBy.length > 0,
            hasHearted: p.heartedBy.length > 0,
            hasSaved: p.savedBy.length > 0,
        }));

        const stats = {
            projects: projects.length,
            upvotes: projects.reduce((sum, p) => sum + p.upvotes, 0),
            hearts: projects.reduce((sum, p) => sum + p.hearts, 0),
            saves: projects.reduce((sum, p) => sum + p.saves, 0)
        };

        return NextResponse.json({ projects: projectsWithFlags, stats });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
