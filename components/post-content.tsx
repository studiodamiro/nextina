'use client';

import { PostQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

export default function PostContent(props: { data: PostQuery; variables: {}; query: string }) {
  const { data } = useTina(props);
  const post = data.post;

  return (
    <div className='container flex flex-col prose prose-sm'>
      <h1>{post?.title}</h1>
      <div data-tina-field={tinaField(data.post, 'body')}>
        <TinaMarkdown content={post?.body} />
      </div>
    </div>
  );
}
