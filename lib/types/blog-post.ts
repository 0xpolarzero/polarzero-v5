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
