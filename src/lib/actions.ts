"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";

export async function createPost(formData: FormData) {

    const title = formData.get("title") as string;
    const body = formData.get("body") as string;
    
    // update database
    await prisma.post.create({
        data: {
            title,
            body,
        }
    });

    // revalidate
    revalidatePath("/posts"); //fetches the new post immediatly in the /posts page.

}
