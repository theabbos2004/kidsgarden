"use server";
import { getSession } from "@/lib/session";
import { KindegartenPostType, ResponseType } from "@/lib/types";
import axios from "axios";
import { errorReturn } from "@/actions/directors";

export async function getKindegartens(): Promise<{
    success: boolean,
    data?: unknown,
    error?: unknown,
}> {
    try {
        const kindergartenRes = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/kindergarten/get`);
        if (!kindergartenRes.data) {
            throw Error;
        }
        return {
            success: true,
            data: kindergartenRes.data.data
        };
    }
    catch (error: unknown) {
        return errorReturn(error)
    }
}

export async function createKindegarten(
    directorData: KindegartenPostType
): Promise<{
    success: boolean;
    data?: KindegartenPostType | unknown;
    error?: unknown;
}> {
    try {
        const session = await getSession()
        if (!session) {
            throw new Error("accessToken not");
        }
        const response: ResponseType = await axios.post(
            `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/kindergartens`,
            directorData,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "*/*",
                    Authorization: `Bearer ${session.accessToken}`,
                },
            }
        );
        if (!response.success) {
            throw new Error(response.message || "Unknown server error");
        }
        return {
            success: true,
            data: response.data,
        };
    } catch (error: unknown) {
        return errorReturn(error)
    }
}