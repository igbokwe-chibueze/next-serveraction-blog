import prisma from "@/lib/db";
import Link from "next/link";

const PostsList = async () => {
    const posts = await prisma.post.findMany();
  
    return (
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
export default PostsList;
  