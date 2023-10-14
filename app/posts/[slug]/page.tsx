import client from '@/tina/__generated__/client';
import PostContent from '@/components/app/post-content';

export default async function PostPage({ params }: { params: { slug: string } }) {
  const result = await client.queries.post({ relativePath: `${params.slug}.mdx` });
  return <PostContent {...result} />;
}
