import { ApolloClient, InMemoryCache } from '@apollo/client';


function createApolloClient() {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),
  });
}

export default  createApolloClient();