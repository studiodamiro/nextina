import client from '@/tina/__generated__/client';
import PageContent from '@/components/app/page-content';

export default async function Page({ params }: { params: { slug: string } }) {
  const result = await client.queries.post({ relativePath: `${params.slug}.mdx` });
  return <PageContent {...result} />;
}
