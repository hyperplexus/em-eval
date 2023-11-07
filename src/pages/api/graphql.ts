import ogm from "@/graphql/ogm";
import { createYoga } from "graphql-yoga";

    const initServer = async () => {
        await ogm.init();
        return ogm.schema;
        };
    // Here we generate the schema for the server based on the OGM
    // This is the schema that will be used by the GraphQL server
  
  // Note the use of the top-level await here in the call to initServer()
  export default createYoga({
    schema: await initServer(),
    graphqlEndpoint: "/api/graphql",
  });