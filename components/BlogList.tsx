import React from 'react';
import { Box, Grid, Typography } from '@mui/material';
import { useFetchBlogs } from '../hooks/useFetchBlogs';
import { BlogCard } from './BlogCard';

export const BlogList: React.FC = () => {
  // Hooken henter blogdata og fortæller, om siden stadig loader eller har fejl.
  const { blogs, loading, error } = useFetchBlogs();

  if (loading) {
    return <div>Indlæser blog posts...</div>;
  }

  if (error) {
    return <div>Fejl ved indlæsning: {error.message}</div>;
  }

  if (blogs.length === 0) {
    return <Typography variant="body1">Ingen blog posts fundet.</Typography>;
  }

  // Det første blogindlæg vises som et fremhævet kort øverst.
  const [featuredBlog, ...restBlogs] = blogs;

  return (
    <Box component="section">
      {/* Overskriften er centreret med MUI Typography, så den passer til layoutet. */}
      <Typography variant="h3" component="h1" align="center" sx={{ mb: 4, fontWeight: 700 }}>
        Blog Posts
      </Typography>

      {featuredBlog ? <BlogCard blog={featuredBlog} featured /> : null}

      {/* De resterende kort placeres i et 2-kolonne grid på større skærme. */}
      {restBlogs.length > 0 ? (
        <Grid container spacing={3} sx={{ mt: featuredBlog ? 1 : 0 }}>
          {restBlogs.map((blog, index) => (
            <Grid item xs={12} sm={6} key={`${blog.heading}-${index}`}>
              <BlogCard blog={blog} />
            </Grid>
          ))}
        </Grid>
      ) : null}
    </Box>
  );
};
