import Link from "next/link";

const PostsList = async () => {
    const response = await fetch("https://dummyjson.com/posts?limit=10");
    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }
    const data = await response.json();
  
    return (
      <ul>
        {data.posts.map((post: { id: number; title: string }) => (
          <li key={post.id} className="mb-5">
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    );
  };
  
export default PostsList;
  