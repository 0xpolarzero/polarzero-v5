import { Category } from '@/components/templates/category-tag';

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
  platform: string;
  url: string;
  tags: Category[];
};
