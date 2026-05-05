/**
 * Blog type definitions for HyGraph CMS
 * Defines the structure of blog posts fetched from the API
 */

export interface BlogDescription {
  text: string;
}

export interface Blog {
  heading: string;
  description: BlogDescription;
}

export interface BlogsResponse {
  blogs: Blog[];
}
