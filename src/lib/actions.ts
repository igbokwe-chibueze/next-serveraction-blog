"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect } from "next/navigation";

export async function createPost(formData: FormData) {
    // check if user is authenticated
    const { isAuthenticated } = getKindeServerSession();
    if (!isAuthenticated()) {
        redirect("api/auth/login");
    }

    // normaly you would want to do a validation check here to make sure you are recieving a formData (e.g zod)
    // if doing this, the fuction parameter would be "formData: unknown" and not "formData: FormData"

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
