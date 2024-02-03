import { isValidElement, ReactNode } from 'react';

import { CodeBlock } from '@/components/ui';
import { CodeBlockProps } from '@/components/ui/code-block/types';
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from '@/components/ui/dialog';

const mdxComponents = (isMobile = false, repoUrl = '') => {
  return {
    a: ({
      href,
      children,
      ...rest
    }: JSX.IntrinsicElements['a'] & { code?: string; highlight?: string[] }) => {
      if (href && rest?.code) {
        let highlightLines: number[] = [];
        if (rest.highlight) {
          const [start, end] = rest.highlight;
          if (end) {
            for (let i = Number(start); i <= Number(end); i++) {
              highlightLines.push(Number(i));
            }
          } else {
            highlightLines = [Number(start)];
          }
        }

        if (isMobile) {
          const url = new URL(href, `${repoUrl}/tree/main/`);
          return (
            <a
              className="mdx--link group cursor-pointer font-medium text-indigo-9 no-underline hover:underline"
              href={url.href}
              target="_blank"
              rel="noopener noreferrer"
              {...rest}
            >
              {children}
            </a>
          );
        } else {
          const contractName = href.substring(href.lastIndexOf('/') + 1, href.lastIndexOf('.sol'));
          return (
            <Dialog>
              <DialogTrigger className="text-left">
                <a className="mdx--link group cursor-pointer font-medium text-indigo-9 no-underline hover:underline">
                  {children}
                </a>
              </DialogTrigger>

              <DialogContent>
                <DialogTitle>{contractName}.sol</DialogTitle>
                <CodeBlock
                  className="border-none"
                  language="solidity"
                  highlightLines={highlightLines.length ? highlightLines : []}
                >
                  {decodeURIComponent(rest.code)}
                </CodeBlock>
              </DialogContent>
            </Dialog>
          );
        }
      }

      if (href && href.startsWith('#')) {
        return (
          <a
            className="mdx--link group font-medium text-indigo-9 no-underline hover:underline"
            href={href}
            {...rest}
          >
            {children}
          </a>
        );
      }

      return (
        <a
          className="mdx--link group w-fit font-medium text-indigo-9 no-underline hover:underline"
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...rest}
        >
          {children}
        </a>
      );
    },
    blockquote: ({ children }: JSX.IntrinsicElements['blockquote']) => (
      <blockquote className="mdx--blockquote group rounded-xl border border-indigo-6 bg-indigo-3 p-4 text-justify text-indigo-12">
        {children}
      </blockquote>
    ),
    code: ({ children }: JSX.IntrinsicElements['code']) => (
      <code className="rounded border border-gray-6 bg-gray-3 px-1 py-0.5 font-normal text-gray-12 before:content-none after:content-none group-[.mdx--link]:text-indigo-9">
        {children}
      </code>
    ),
    h1: ({ children }: JSX.IntrinsicElements['h1']) => (
      <h1 className="mb-4 text-3xl font-semibold tracking-tight text-gray-12">{children}</h1>
    ),
    h2: ({ children }: JSX.IntrinsicElements['h2']) => (
      <h2
        className="mb-2 text-xl font-semibold tracking-tight text-gray-12 md:mb-4 md:text-2xl"
        id={toAnchorLink(children)}
      >
        {children}
      </h2>
    ),
    h3: ({ children }: JSX.IntrinsicElements['h3']) => (
      <h3
        className="mb-2 mt-5 text-lg font-semibold tracking-tight text-gray-12 md:mb-4 md:mt-6 md:text-xl"
        id={toAnchorLink(children)}
      >
        {children}
      </h3>
    ),
    p: ({ children }: JSX.IntrinsicElements['p']) => (
      <p className="text-justify font-light not-italic text-gray-11 before:content-none after:content-none group-[.mdx--blockquote]:my-0 group-[.mdx--blockquote]:text-indigo-12">
        {children}
      </p>
    ),
    li: ({ children }: JSX.IntrinsicElements['li']) => (
      <li className="text-justify text-gray-11">{children}</li>
    ),
    pre: ({
      children,
      ...rest
    }: JSX.IntrinsicElements['pre'] & Omit<CodeBlockProps, 'children'>) => {
      const childrenProps = isValidElement(children) ? children.props : undefined;
      const language = childrenProps?.className ? childrenProps.className.substring(9) : undefined;
      const code = typeof childrenProps?.children === 'string' ? childrenProps.children.trim() : '';

      return (
        <CodeBlock language={language} {...rest}>
          {code}
        </CodeBlock>
      );
    },
    /* ---------------------------------- Table --------------------------------- */
    table: ({ children }: JSX.IntrinsicElements['table']) => (
      <div className="overflow-auto">
        <table className="w-full overflow-auto">{children}</table>
      </div>
    ),
    tr: ({ children }: JSX.IntrinsicElements['tr']) => <tr className="text-gray-11">{children}</tr>,
    td: ({ children }: JSX.IntrinsicElements['td']) => <td className="text-gray-11">{children}</td>,
  };
};

const toAnchorLink = (text: ReactNode | null) =>
  text
    ?.toString()
    .toLowerCase()
    .replace(/[^\w\s-]/gi, '')
    .trim()
    .replace(/\s+/g, '-');

export default mdxComponents;
