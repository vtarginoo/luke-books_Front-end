import { gql } from "@apollo/client";

export const SEARCH_GBOOKS_BY_AUTHOR_TITLE_ISBN = gql`
  query SearchGBooksByAuthorTitleAndISBN(
    $autor: String
    $titulo: String
    $isbn: String
  ) {
    books: searchGBooks(author: $autor, title: $titulo, isbn: $isbn) {
      IdGoogle
      title
      autores
      subtitle
      publisher
      publishedDate
      description
      industryIdentifiers {
        type
        identifier
      }
      pageCount
      printType
      categories
      averageRating
      ratingsCount
      imageLinks {
        smallThumbnail
        thumbnail
      }
      language
    }
  }
`;
