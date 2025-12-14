import { NextResponse, NextRequest } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
    try {
        const userId = req.headers.get("x-user-id")!

        const user = await prisma.user.findUnique({
            where: { id: userId },
            select: { id: true, fullName: true, email: true, createdAt: true }
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}

// export async function PUT(req: NextRequest) {
//     try {
//         const userId = req.headers.get("x-user-id")!;
//         const body = await req.json();
//         const { fullName, email, github } = body;

//     const updateData: any = {};
//     if (fullName) updateData.fullName = fullName.trim();
//     if (email) updateData.email = email.trim();
//     if (github !== undefined) {
//       updateData.github = typeof github === "string"
//         ? github.trim().replace(/^(https?:\/\/)?(www\.)?github\.com\/?/i, "").replace(/^@/, "").toLowerCase()
//         : github;
//     }

//     const updatedUser = await prisma.user.update({
//       where: { id: userId },
//       data: updateData,
//       select: { id: true, fullName: true, email: true, createdAt: true }
//     });

//     return NextResponse.json({ user: updatedUser });
//   } catch (err) {
//     console.error(err);
//     return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
// }
