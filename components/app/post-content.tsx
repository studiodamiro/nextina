'use client';

import { PostQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import Counter from '../counter';
import NextImage, { ImageProps } from 'next/image';
import Codeblock, { CodeProps } from '../codeblock';

const components = {
  Counter,
  Image: (props: ImageProps) => <NextImage width={718} height={404} {...props} />,
  Codeblock: (props: CodeProps) => <Codeblock children={props.children} language={props.language} />,
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
