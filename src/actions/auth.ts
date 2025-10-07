"use server";
import { createSession } from "@/lib/session";
import axios from "axios";
import { errorReturn } from "@/actions/directors";

export async function signIn({ username, password }: { username: string, password: string }): Promise<{
    success: boolean,
    data?: unknown,
    error?: unknown,
}> {
    try {
        const signIn = await axios.post(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/auth/login`, {
            username,
            password
        });
        if (!signIn.data) {
            throw Error;
        }
        await createSession(signIn.data.data.accessToken)
        return {
            success: true,
            data: signIn.data.data
        };
    }
    catch (error: unknown) {
        return errorReturn(error)
    }
}