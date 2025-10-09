"use server";

import axios from "axios";
import { errorReturn } from "@/actions/directors";

export async function getBranchsOfKindegarten({kindergartenId}:{kindergartenId:string}): Promise<{
    success: boolean,
    data?: unknown,
    error?: unknown,
}> {
    try {
        const kindergartenRes = await axios.get(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/kindergarten/${kindergartenId}/branches`);
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