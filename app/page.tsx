import client from '@/tina/__generated__/client';
import PostList from '@/components/post-list';

export default async function PostPage() {
  const result = await client.queries.postConnection();
  return <PostList {...result} />;
}
