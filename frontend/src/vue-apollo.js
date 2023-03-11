import {
    ApolloClient,
    createHttpLink,
    InMemoryCache,
  } from "@apollo/client/core";
  
  // HTTP connection to the API
  const httpLink = createHttpLink({
    uri: "http://localhost:8000/graphql", // Matches the url and port that Django is using
  });
  
  // Cache implementation
  const cache = new InMemoryCache();
  
  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  });

export default apolloClient
