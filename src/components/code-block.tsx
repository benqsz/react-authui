import { ReactNode } from 'react';
import { type BundledLanguage, codeToHtml } from 'shiki';

type Props = {
  code: string;
  lang: BundledLanguage;
};

async function CodeBlock({ lang, code }: Props) {
  const out = await codeToHtml(code, {
    lang,
    theme: 'tokyo-night',
  });

  return (
    <div
      className="not-prose rounded-md border *:rounded-md"
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

export { CodeBlock };
