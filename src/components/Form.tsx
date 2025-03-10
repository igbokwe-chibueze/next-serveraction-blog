import { createPost } from "@/lib/actions";

export default function Form() {
  return (
    <form
      action={createPost}
      className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
    >
        <input
            type="text"
            name="title"
            placeholder="Title for new post"
            className="border rounded px-3 h-10"
            required
        />
        <textarea
            name="body"
            placeholder="Body content for new post"
            className="border rounded px-3 py-2"
            rows={6}
            required
        />
        <button 
            type="submit"
            className="bg-zinc-900 hover:bg-zinc-700 transition-all hover:scale-105 duration-600 
            text-white px-3 py-2 rounded-md"
        >
            Create
        </button>
    </form>
  );
}
