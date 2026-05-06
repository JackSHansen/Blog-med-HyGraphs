import { gql } from 'graphql-request';

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
