import { Category } from '@/components/templates/category-tag';

type Platform = 'Medium' | 'Hashnode' | 'PDF' | 'Twitter';

/**
 * Type for a blog post on [**polarzero.xyz/writing**](https://polarzero.xyz/writing),
 * intended to be displayed in a table (cards) on the page.
 * @param title Title of the blog post.
 * @param description Short description of the blog post.
 * @param slug Slug of the blog post.
 * @param date Date of the original publication.
 * @param platform Platform on which the blog post was originally published.
 * @param url URL of the blog post (on this platform).
 * @param tags Tags describing the blog post.
 */
export type BlogPost = {
  title: string;
  subtitle?: string;
  description: string;
  slug: string;
  date: Date; // Format: YYYY-MM-DD
  platform: Platform;
  url: string;
  tags: Category[];
};

/**
 * Type for a section of a blog post on [**polarzero.xyz/writing/<slug>**](https://polarzero.xyz/writing/<slug>),
 * intended to be displayed in its own page.
 * @param title Title of the section.
 * @param slug The slug of the section (to navigate in the file system).
 * @param subsections Subsections of the section.
 */
export type BlogPostSection = {
  title: string;
  slug: string;
  subsections: BlogPostSubsection[];
};
/**
 * @param title Title of the subsection.
 * @param slug ID of the subsection (to navigate in the page with anchors).
 */
type BlogPostSubsection = {
  title: string;
  slug: string;
};
