import NextLink from 'next/link';
import { ReactNode } from 'react';

import { Link as PdfLink, Text } from '@react-pdf/renderer';

import { cn } from '@/lib/utils';

/**
 * Either a regular next/link or a react-pdf link, depending on the context.
 */
export const Link = ({
  href,
  children,
  pdf,
  className,
}: {
  href: string;
  children: ReactNode;
  pdf: boolean;
  className?: string;
}) => {
  if (pdf) {
    return (
      <PdfLink href={href} style={{ color: 'hsl(210 40% 98%)', fontWeight: 'medium' }}>
        {children}
      </PdfLink>
    );
  }

  return (
    <NextLink
      className={cn('font-medium hover:underline', className)}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </NextLink>
  );
};

/**
 * An italicized text on Next.js, or just a regular muted text on PDF.
 */
export const Italic = ({ children, pdf }: { children: ReactNode; pdf: boolean }) => {
  if (pdf) {
    return <Text style={{ color: 'hsl(215.4 16.3% 56.9%)' }}>{children}</Text>;
  }

  return <i>{children}</i>;
};
