import getPosts from "@/services/getPosts";
import Link from "../../node_modules/next/link";

const HomePage = () => {
    const posts = getPosts();

      return (
        <div className="flex flex-col space-y-2">
          {posts.map(post => (
            <div key={post.slug} className="flex flex-col">
                <Link href={post.slug}>
                    <h2 className="text-xl font-bold">{post.title}</h2>
                </Link>
                <h2 className="text-xl font-semibold">{post.description}</h2>
            </div>
          ))}
        </div>
      )
};

export default HomePage;
