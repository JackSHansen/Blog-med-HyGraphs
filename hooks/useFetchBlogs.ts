/**
 * Custom Hook: useFetchBlogs
 * Handles fetching blog posts from HyGraph API
 * Returns loading state, error state, and blog data
 */

import { useEffect, useState } from 'react';
import { graphqlClient } from '../utils/graphql-client';
import { GET_BLOGS } from '../utils/queries';
import { Blog, BlogsResponse } from '../types/blog';

interface UseFetchBlogsReturn {
  blogs: Blog[];
  loading: boolean;
  error: Error | null;
}

export const useFetchBlogs = (): UseFetchBlogsReturn => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        const data = await graphqlClient.request<BlogsResponse>(GET_BLOGS);
        setBlogs(data.blogs);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err : new Error('Unknown error occurred'));
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return { blogs, loading, error };
};
