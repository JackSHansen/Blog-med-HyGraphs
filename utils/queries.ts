import { gql } from 'graphql-request';

/**
 * Fetches all blog posts from HyGraph
 * Returns blog heading and description text
 */
export const GET_BLOGS = gql`
  query GetBlogs {
    blogs {
      heading
      description {
        text
      }
    }
  }
`;
