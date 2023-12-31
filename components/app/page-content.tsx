'use client';

import { PageQuery } from '@/tina/__generated__/types';
import { tinaField, useTina } from 'tinacms/dist/react';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import NextImage, { ImageProps } from 'next/image';
import Counter from '../counter';

const components = {
  Image: (props: ImageProps) => <NextImage width={718} height={404} {...props} />,
  Counter,
};

export default function PostContent(props: { data: PageQuery; variables: {}; query: string }) {
  const { data } = useTina(props);
  const page = data.page;

  if (!page) return null;
  return (
    <article
      data-tina-field={tinaField(page, 'body')}
      className='min-w-full py-6 prose prose-slate dark:prose-invert prose-sm'
    >
      <h1>{page.title}</h1>
      <TinaMarkdown content={page.body} components={components} />
    </article>
  );
}
