import { NextResponse } from "next/server";
import bcrypt from 'bcrypt';
import { prisma } from "@/lib/prisma";
import { signupSchema } from "@/lib/auth";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const parseResult = signupSchema.safeParse(body);

        if (!parseResult.success) {
            return NextResponse.json({ error: "All fields required" }, { status: 400 });
        }

        const { fullName, email, password } = parseResult.data;

        const existingUser = await prisma.user.findUnique({ where: { email } });
        if (existingUser) {
            return NextResponse.json({ error: "Email already exists" }, { status: 400 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        await prisma.user.create({
            data: {
                fullName,
                email,
                password: hashedPassword,
            }
        });

        return NextResponse.json({ message: "Signup Done" }, { status: 200 });
    } catch (err) {
        console.error(err);
        return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
    }
}
