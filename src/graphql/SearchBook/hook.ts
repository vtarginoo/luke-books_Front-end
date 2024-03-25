import { useQuery } from "@apollo/client";
import { SEARCH_GBOOKS_BY_AUTHOR } from "./queries";

const usePesquisaBook = (autor: string) => {
  return useQuery(SEARCH_GBOOKS_BY_AUTHOR, {
    variables: {
      autor,
    },
  });
};

export default usePesquisaBook;
