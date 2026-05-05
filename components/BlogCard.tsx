import React from 'react';
import { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog }) => {
  return (
    <article>
      <h2>{blog.heading}</h2>
      <p>{blog.description.text}</p>
    </article>
  );
};
