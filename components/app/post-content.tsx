'use client';

import { PostQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function PostContent(props: { data: PostQuery; variables: {}; query: string }) {
  const { data } = useTina(props);
  const post = data.post;

  return (
    <article
      data-tina-field={tinaField(data.post, 'body')}
      className='min-w-full py-6 prose prose-slate dark:prose-invert prose-sm'
    >
      <h1>{post?.title}</h1>
      <TinaMarkdown content={post?.body} />
    </article>
  );
}
