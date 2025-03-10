"use server";

export async function createPost(formData: FormData) {
    const title = formData.get("title") as string;
    const content = formData.get("body") as string;
    
    console.log("Fake Blog " + title, content);
}
