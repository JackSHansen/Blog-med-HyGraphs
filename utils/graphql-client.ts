import { GraphQLClient } from 'graphql-request';

const HYGRAPH_API_URL = 'https://eu-west-2.cdn.hygraph.com/content/cmoiq4jxn00q407wdyikjhoec/master';

export const graphqlClient = new GraphQLClient(HYGRAPH_API_URL, {
  headers: {
    'Content-Type': 'application/json',
  },
});
