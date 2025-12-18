import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    try {
        const projects = await prisma.project.findMany({
            include: { user: { select: { fullName: true } } },
            orderBy: { createdAt: 'desc' }
        });

        return NextResponse.json({ projects });
    } catch (error) {
        console.log(error)
        return NextResponse.json({ error: "Failed to fetch" }, { status: 500 });
    }
}
