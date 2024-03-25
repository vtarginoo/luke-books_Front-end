import BarraPesquisa from "./BarraPesquisa";
import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { SEARCH_GBOOKS_BY_AUTHOR_TITLE_ISBN } from "../../graphql/SearchBook/queries";
import styled from "styled-components";
import { Card } from "antd";
import CardLivro from "../CardLivro";
import { IBookInfo } from "../../interfaces/IBookInfo";
import { useRecoilState } from "recoil";
import {
  ListaPesquisaState,
  SelectedBookState,
} from "../../state/atoms/atomSearch";

const StyledPesquisa = styled(Card)`
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SectionSearch = () => {
  const [searchType, setSearchType] = useState("Autor"); // Estado para armazenar o tipo de pesquisa selecionado
  const [searchValue, setSearchValue] = useState("");
  const [livros, setLivros] = useRecoilState(ListaPesquisaState);
  const [SelectedBook, setSelectedBook] = useRecoilState(SelectedBookState);

  const [executeQuery, { loading, error }] = useLazyQuery(
    SEARCH_GBOOKS_BY_AUTHOR_TITLE_ISBN,
    {
      onCompleted: (data: { books: IBookInfo[] }) => {
        console.log("Dados recebidos:", data);
        setLivros(data.books);
      },
    }
  );

  const handleSearch = (type: string, value: string) => {
    console.log("Tipo de pesquisa:", type);
    console.log("Valor da pesquisa:", value);
    setSearchType(type);
    setSearchValue(value);

    // Definindo as variáveis da consulta GraphQL com base no tipo de pesquisa selecionado
    let variables = {};
    if (type === "Autor") {
      variables = { autor: value };
    } else if (type === "Título") {
      variables = { titulo: value };
    } else if (type === "ISBN") {
      variables = { isbn: value };
    }

    // Executando a consulta GraphQL com as variáveis apropriadas
    executeQuery({ variables });
  };

  const handleBookClick = (livro: IBookInfo) => {
    setSelectedBook(livro); // Atualiza o estado SelectedBookState com o livro clicado
  };

  console.log("Tipo de pesquisa selecionado:", searchType);
  console.log("Valor da pesquisa:", searchValue);
  console.log("Carregamento:", loading);
  console.log("Erro:", error);
  console.log("Livros atualizados:", livros);
  console.log("Livros Selecionado:", SelectedBook);

  return (
    <StyledDiv>
      <BarraPesquisa onSearch={handleSearch} />
      <StyledPesquisa>
        {loading && <div>Carregando...</div>}
        {error && <div>Erro ao carregar resultados.</div>}
        {!loading && !error && livros.length > 0 && (
          <StyledDiv>
            <CardLivro
              books={livros}
              onClick={(livro) => handleBookClick(livro)}
            />
          </StyledDiv>
        )}
      </StyledPesquisa>
    </StyledDiv>
  );
};

export default SectionSearch;
