import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { Blog } from '../types/blog';

interface BlogCardProps {
  blog: Blog;
  featured?: boolean;
}

export const BlogCard: React.FC<BlogCardProps> = ({ blog, featured = false }) => {
  return (
    // Card-komponenten bruges til at vise hvert blogindlæg som en tydelig enhed.
    <Card
      component="article"
      sx={{
        mb: featured ? 4 : 0,
        borderRadius: 3,
        boxShadow: featured ? 4 : 2,
        height: '100%',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        {/* Overskriften får større typografi, når kortet er fremhævet. */}
        <Typography variant={featured ? 'h4' : 'h5'} component="h2" sx={{ mb: 1.5, fontWeight: 700 }}>
          {blog.heading}
        </Typography>
        {/* Beskrivelsen vises i en afdæmpet farve for bedre læsbarhed. */}
        <Typography variant="body1" color="text.secondary">
          {blog.description.text}
        </Typography>
      </CardContent>
    </Card>
  );
};
