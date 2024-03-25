import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ReactElement } from "react";

type Props = { children: ReactElement };

const client = new ApolloClient({
  uri: "http://localhost:8001/graphql/",
  cache: new InMemoryCache(),
});

const ApolloClientProvider = ({ children }: Props) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloClientProvider;
