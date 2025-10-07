"use server";
import { getSession } from "@/lib/session";
import { DirectorPostType, ResponseType } from "@/lib/types";
import axios, { isAxiosError } from "axios";

export async function errorReturn(error: unknown) {
  let message = "Noma'lum xatolik yuz berdi";

  if (isAxiosError(error)) {
    if (error.response?.data) {
      const data = error.response.data;

      if (typeof data === "string") {
        try {
          const parsed = JSON.parse(data);
          if (parsed.message) {
            message = parsed.message;
          } else {
            message = JSON.stringify(parsed, null, 2);
          }
        } catch {
          message = data;
        }
      } else if (typeof data === "object" && data.message) {
        message = data.message;
      } else {
        message = JSON.stringify(data, null, 2);
      }
    } else if (error.message) {
      message = error.message;
    }
  } else if (error instanceof Error) {
    message = error.message;
  } else if (typeof error === "string") {
    message = error;
  }

  if (message.includes("Cannot deserialize value of type")) {
    message = "Kiritilgan 'type' qiymati backenddagi enumga mos emas. Faqat [XUSUSIY, DAVLAT] qiymatlarini yuboring.";
  }

  console.error("Xato:", message);

  return {
    success: false,
    error: message
  };
}


export async function createDirector(
  directorData: DirectorPostType
): Promise<{
  success: boolean;
  data?: unknown;
  error?: string;
}> {
  try {
    const session = await getSession();
    if (!session) {
      throw new Error("Access token not found");
    }

    const response = await axios.post<ResponseType>(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/api/admin/directors`,
      directorData,
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "*/*",
          Authorization: `Bearer ${session.accessToken}`,
        },
      }
    );

    if (!response.data.success) {
      throw new Error(response.data.message || "Unknown server error");
    }

    return {
      success: true,
      data: response.data.data,
    };
  } catch (error) {
    return errorReturn(error)
  }
}
