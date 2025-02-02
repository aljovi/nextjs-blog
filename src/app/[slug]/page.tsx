import getPost from "@/services/getPost";
import MarkdownPreview from "@/components/markdownPreview";
import getPosts from "@/services/getPosts";

type Params = {
  slug: string;
};

const PostPage = ({ params }: {params: Params}) => {
  const post = getPost(params.slug);

  return (
    <div className="flex flex-col space-y-2">
      <h1 className="text-xl font-semibold">{post.title}</h1>
      <MarkdownPreview source={post.content} />
      <span>{post.author}</span>
      <span>{post.category}</span>
      <span>{post.date}</span>
    </div>
  );
};

export async function generateStaticParams() {
  const posts = getPosts();

  return posts.map(
    (post) => {
      return {slug: post.slug};
    }
  );
}

export default PostPage;