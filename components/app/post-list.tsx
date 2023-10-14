'use client';

import { PostConnectionQuery } from '@/tina/__generated__/types';
import Link from 'next/link';
import { useTina } from 'tinacms/dist/react';

export default function PostList(props: { data: PostConnectionQuery; variables: {}; query: string }) {
  const { data } = useTina(props);
  const posts = data.postConnection.edges;

  if (!posts) return null;
  return (
    <div className='container flex flex-col gap-6 py-6'>
      {posts?.map((edge, i) => {
        const post = edge?.node;
        const slug = `/posts/${post?._sys.breadcrumbs.join('/')}`;

        return (
          <Link key={i} href={slug}>
            <span className='text-xl font-bold'>{post?.title}</span>
            <p className='text-sm'>{post?.description}</p>
          </Link>
        );
      })}
    </div>
  );
}
