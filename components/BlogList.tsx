import React from 'react';
import { useFetchBlogs } from '../hooks/useFetchBlogs';
import { BlogCard } from './BlogCard';

export const BlogList: React.FC = () => {
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return <div>Indlæser blog posts...</div>;
  }

  if (error) {
    return <div>Fejl ved indlæsning: {error.message}</div>;
  }

  if (blogs.length === 0) {
    return <div>Ingen blog posts fundet.</div>;
  }

  return (
    <section>
      <h1>Blog Posts</h1>
      <div>
        {blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </section>
  );
};
