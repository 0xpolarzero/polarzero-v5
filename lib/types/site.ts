import type { ReactNode } from 'react';

/**
 * Type for an external link.
 * @param name Name describing the link.
 * @param href URL of the link.
 * @param icon Optional icon to describe/represent the link.
 */
export type ExternalLink = {
  name: string;
  href: string;
  icon?: ReactNode;
};

/**
 * Type for a page slug on [**polarzero.xyz**](https://polarzero.xyz).
 */
export type PageSlug =
  | '/'
  | '/writing'
  | '/portfolio'
  | '/hire-me'
  | `/writing/${string}`
  | '/gas-visualizer';

/**
 * Type for an external page linked on [**polarzero.xyz**](https://polarzero.xyz),
 * intended to be part of configuration files (e.g. for the navigation bar
 * component).
 */
export type PageExternalLink = 'https://twitter.com/0xpolarzero' | 'https://github.com/0xpolarzero';

/**
 * Type for a page on [**polarzero.xyz**](https://polarzero.xyz),
 * intended to be part of configuration files (e.g. for the navigation bar
 * component).
 * @param name Name describing the page.
 * @param slug Slug/URL of the page.
 * @param icon Optional icon to describe/represent the page.
 */
export type Page = {
  name: string;
  slug: PageSlug | PageExternalLink;
  icon?: ReactNode;
};
