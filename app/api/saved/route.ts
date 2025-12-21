import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id")!;

        const user = await prisma.user.findUnique({
            where: { id: userId },
            include: {
                savedProjects: {
                    include: { user: { select: { fullName: true } } },
                    orderBy: { createdAt: 'desc' }
                }
            }
        });

        return NextResponse.json({ projects: user?.savedProjects || [] });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}