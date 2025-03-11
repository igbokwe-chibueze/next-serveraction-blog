import prisma from "@/lib/db";
import { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateMetadata({params}: {params: {id: string}}):Promise<Metadata> {
    const response = await fetch(`https://dummyjson.com/posts/${params.id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const post = await response.json();

    return {
      title: post.title,
      description: post.body,
    }
} 

const page = async ({params}: {params: {id: string}} ) => {
  const post = await prisma.post.findUnique({
    where: {
      // ... provide filter here
      id: parseInt(params.id),
    },
  });

  if (!post) {
    notFound();
  }

  return (
    <main className="px-7 pt-24 text-center">
      <h1 className="text-5xl font-semibold mb-7">{post.title}</h1>
      <p className="max-w-[700px] mx-auto">{post.body}</p>
    </main>
  )
}

export default page