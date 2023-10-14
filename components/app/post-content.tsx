'use client';

import NextImage, { ImageProps } from 'next/image';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { PostQuery } from '@/tina/__generated__/types';
import Codeblock from '../codeblock';
import Counter from '../counter';

const components = {
  Image: (props: ImageProps) => {
    return <NextImage width={718} height={404} {...props} />;
  },
  code_block: (props: any) => {
    return <Codeblock language={props.lang}>{props.value}</Codeblock>;
  },
  Counter, // Custom component
};

export default function PostContent(props: { data: PostQuery; variables: {}; query: string }) {
  const { data } = useTina(props);
  const post = data.post;

  if (!post) return null;
  return (
    <article
      data-tina-field={tinaField(post, 'body')}
      className='min-w-full py-6 prose prose-slate dark:prose-invert prose-sm'
    >
      <h1>{post.title}</h1>
      <TinaMarkdown content={post.body} components={components} />
    </article>
  );
}
