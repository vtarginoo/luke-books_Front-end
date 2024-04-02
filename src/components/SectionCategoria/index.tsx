import { Card } from "antd";
import { ICategoria } from "../../interfaces/ICategoria";
import { listaCategoria } from "../../state/atoms/atomCategoria";
import { useRecoilState, useRecoilValue } from "recoil";
import { useEffect, useState } from "react";
import CardLivro from "../CardLivro";
import "./SectionCategoria.css";
import styled from "styled-components";
import { useGetBookByStatus } from "../../http/ApiCalls/getBook";
import { IBookInfo } from "../../interfaces/IBookInfo";
import { SelectedBookState } from "../../state/atoms/atomSearch";

const StyledCategoria = styled(Card)`
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

const SectionCategoria = () => {
  const [SelectedBook, setSelectedBook] = useRecoilState(SelectedBookState);
  const tabCategoria = useRecoilValue(listaCategoria);
  const tabList = tabCategoria.map((categoria: ICategoria) => ({
    key: String(categoria.key),
    tab: categoria.tab,
  }));

  const [activeTabKey, setActiveTabKey] = useState<string>(
    String(tabCategoria[0]?.key) || ""
  );

  const onTabChange = (key: string) => {
    setActiveTabKey(key);
  };

  const tabObject = tabList.find((tab) => tab.key === activeTabKey);
  const tabName = tabObject ? tabObject.tab : "";

  // UseEffect para observar mudanças em activeTabKey
  useEffect(() => {
    console.log("TabKeyAtual", activeTabKey);
    console.log("Tab Atual Selecionada", tabObject);
  }, [activeTabKey, tabObject]); // Esta função será executada sempre que activeTabKey mudar

  const bookList = useGetBookByStatus(tabName);
  const bookListOrDefault = bookList || []; // Se bookList for null, atribui um array vazio

  console.log("Resposta da API É:", bookList);

  const handleBookClick = (livro: IBookInfo) => {
    setSelectedBook(livro); // Atualiza o estado SelectedBookState com o livro clicado
  };

  console.log("Livros Selecionado:", SelectedBook);

  return (
    <>
      <StyledCategoria
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={onTabChange}
      >
        <StyledDiv>
          {bookListOrDefault && bookListOrDefault.length > 0 ? ( // Verifica se há livros disponíveis
            <CardLivro
              books={bookListOrDefault}
              onClick={(livro) => handleBookClick(livro)}
            /> // Renderiza o CardLivro se houver livros
          ) : (
            <div>Não foi possível obter resultados.</div> // Renderiza uma mensagem de erro se não houver livros
          )}
        </StyledDiv>
      </StyledCategoria>
    </>
  );
};

export default SectionCategoria;
