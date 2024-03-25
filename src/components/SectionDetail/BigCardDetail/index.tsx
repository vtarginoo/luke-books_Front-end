/* eslint-disable @typescript-eslint/no-unused-vars */
import { Card, Typography } from "antd";
import styled from "styled-components";
import { SelectedBookState } from "../../../state/atoms/atomSearch";
import { useRecoilState } from "recoil";
import BotaoAdicionar from "../BotaoAdicionar";
import SynopsisSubSection from "../SubSection/SynopsisSubSection";
import BookDataSubSection from "../SubSection/BookDataSubSection";
import { useEffect, useState } from "react";
import getBookVerification from "../../../http/ApiCalls/getBookVerification";
import { useParams } from "react-router-dom";
import postBook from "../../../http/ApiCalls/postBook";
import putBookStatus from "../../../http/ApiCalls/putBookStatus";
import { IBookInfo } from "../../../interfaces/IBookInfo";
import BotaoDelete from "../BotaoDelete";
import deleteBook from "../../../http/ApiCalls/deleteBook";

const { Text } = Typography;
const { Meta } = Card;

const StyledBigCard = styled(Card)`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  align-items: center;
  background-color: #f5f5f5;
`;

const ImageSpace = styled.img`
  display: flex;
  padding: 2rem 2rem 2rem 2rem;
  margin: 0 auto; /* Centraliza horizontalmente */
  border-radius: 1rem;
`;

const BookDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  padding-top: 1rem;
  padding-bottom: 2rem;
`;

const OtherDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-color: #ffffff;
  width: 100%;
  padding-top: 2rem;
  padding-bottom: 2rem;
  border-top: 2px solid #cccccc;
  border-bottom: 2px solid #cccccc;
`;

const ButtonDiv = styled.div`
  align-items: center;
  padding: 2rem;
  display: flex;
`;

const BigCardDetail = () => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selectedBook, _setSelectedBook] = useRecoilState(SelectedBookState);
  const [bookData, setBookData] = useState<IBookInfo | null>(null);
  const [selectedStatus, setSelectedStatus] = useState<string | null>(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      if (params.id) {
        try {
          const data = await getBookVerification(params.id);
          if (data) {
            setBookData(data);
            setSelectedStatus(data.status);
          } else {
            console.error("Dados do livro não encontrados.");
          }
        } catch (error) {
          console.error("Erro ao buscar dados do livro:", error);
        }
      }
    };
    fetchData();
  }, [params.id]);

  let fetchbookId: number | null = null; // Definir o tipo de fetchbookId como string ou null

  if (bookData && typeof bookData.id === "number") {
    fetchbookId = bookData.id;
  }

  const handleMenuClick = async (status: string) => {
    setSelectedStatus(status);

    if (params.id) {
      if (selectedStatus === "notFound") {
        await postBook(selectedBook, status);
      } else {
        await putBookStatus(fetchbookId, status);
      }

      // Após adicionar ou atualizar o livro, você pode fazer outra chamada para verificar os dados do livro
      await getBookVerification(params.id);
    }
  };

  const handleDelete = async () => {
    // Verificar se params.id existe
    if (params.id) {
      // Exibir um alerta pedindo confirmação
      const confirmDelete = window.confirm(
        "Tem certeza que deseja deletar o livro?"
      );

      if (confirmDelete) {
        console.log("Botão delete clicado");

        try {
          // Realizar a requisição DELETE
          await deleteBook(fetchbookId);

          setSelectedStatus("notFound");

          // Após a exclusão, realizar uma chamada para getBookVerification para atualizar os dados do livro
          await getBookVerification(params.id);
        } catch (error) {
          console.error("Erro ao excluir o livro:", error);
        }
      } else {
        console.log("A exclusão foi cancelada pelo usuário.");
      }
    } else {
      console.log("Não há ID de livro para excluir.");
    }
  };

  if (!selectedBook) {
    return (
      <StyledBigCard>
        <div>Carregando...</div>
      </StyledBigCard>
    );
  }

  // Verificar se selectedBook.description não é undefined antes de usá-lo
  const synopsis = selectedBook.description || "";
  if (bookData) console.log(bookData.id);

  return (
    <>
      <StyledBigCard>
        <ImageSpace
          src={selectedBook.imageLinks?.thumbnail}
          alt={selectedBook.title}
        />
        <BookDetails>
          <Meta title={selectedBook.title} />
          <Text>{selectedBook.autores.join(", ")}</Text>

          <ButtonDiv>
            {/* Botão que irá executar o método post com a passagem de função */}
            <BotaoAdicionar
              bookStatus={selectedStatus}
              handleClick={handleMenuClick}
            />

            {/* Verificar se selectedStatus não é "notFound" antes de renderizar o BotaoDelete */}
            {selectedStatus !== "notFound" && (
              <BotaoDelete onClick={handleDelete} />
            )}
          </ButtonDiv>
        </BookDetails>
        <OtherDetails>
          <SynopsisSubSection synopsis={synopsis} />
          <BookDataSubSection
            categories={selectedBook.categories}
            pageCount={selectedBook.pageCount}
            publisher={selectedBook.publisher}
            publishDate={selectedBook.publishedDate}
            printType={selectedBook.printType}
            industryIdentifiers={selectedBook.industryIdentifiers}
            language={selectedBook.language}
          />
        </OtherDetails>
      </StyledBigCard>
    </>
  );
};

export default BigCardDetail;
