import React from "react";
import styled from "styled-components";
import { IIndustryIdentifier } from "../../../interfaces/IBookInfo";

const Container = styled.div`
  padding: 0.5rem;
  border-bottom: 2px solid #cccccc;
  text-align: center; /* Centraliza o conteúdo dentro do Container */
`;

const ListItem = styled.div`
  margin-bottom: 0.5rem;
  text-align: left; /* Alinha o texto à esquerda dentro do ListItem */
`;

interface BookDataSubSectionProps {
  categories?: string[];
  pageCount?: number;
  publisher?: string;
  publishDate?: string;
  printType?: string;
  language?: string;
  industryIdentifiers?: IIndustryIdentifier[];
}

const BookDataSubSection: React.FC<BookDataSubSectionProps> = ({
  categories,
  pageCount,
  publisher,
  publishDate,
  printType,
  industryIdentifiers,
  language,
}) => {
  console.log("industryIdentifiers:", industryIdentifiers);
  console.log("printType:", printType);

  return (
    <Container>
      <h2>Dados do Livro</h2>
      <ListItem>
        Categorias: {categories ? categories.join(", ") : "N/A"}
      </ListItem>
      <ListItem>Número de Páginas: {pageCount ?? "N/A"}</ListItem>
      <ListItem>Editora: {publisher ?? "N/A"}</ListItem>
      <ListItem>Data de Publicação: {publishDate ?? "N/A"}</ListItem>
      <ListItem>Tipo de Impressão: {printType ?? "N/A"}</ListItem>
      <ListItem>
        Idenficadores da Indústria:
        {industryIdentifiers && industryIdentifiers.length > 0 ? (
          <ul>
            {industryIdentifiers.map((identifier, index) => (
              <li key={index}>
                {identifier.type}: {identifier.identifier}
              </li>
            ))}
          </ul>
        ) : (
          "N/A"
        )}
      </ListItem>
      <ListItem>Idioma: {language ?? "N/A"}</ListItem>
    </Container>
  );
};

export default BookDataSubSection;
