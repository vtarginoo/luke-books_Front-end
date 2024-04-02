import { Card, Typography } from "antd";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { IBookInfo } from "../../interfaces/IBookInfo";

const { Meta } = Card;
const { Text } = Typography;

interface CardLivroProps {
  books: IBookInfo[];
  onClick?: (livro: IBookInfo) => void; // Tornando a propriedade onClick opcional
}

const StyledCard = styled(Card)`
  width: 11rem;
  height: 18rem; /* Altura determinada automaticamente com base na proporção da imagem */
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

const BookImage = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: contain; /* Mantém a proporção original da imagem sem distorção */
  padding: 10px; /* Adiciona um preenchimento interno à imagem */
  box-sizing: border-box; /* Garante que o preenchimento seja incluído na largura e altura total */
`;

const BookInfo = styled.div`
  padding: 0.2rem; /* Espaçamento para os metadados */
  max-width: 100%;
  overflow: hidden;
  white-space: nowrap;
`;

const BookTitle = styled(Text)`
  font-weight: bold;
`;

const CardLivro: React.FC<CardLivroProps> = ({ books, onClick }) => {
  const handleCardClick =
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    (livro: IBookInfo) => (_event: React.MouseEvent<HTMLDivElement>) => {
      if (onClick) {
        onClick(livro);
      }
    };

  return (
    <>
      {books.map((book) => (
        <Link
          to={`/livro/${book.IdGoogle}`}
          key={book.IdGoogle}
        >
          <StyledCard
            key={book.IdGoogle}
            onClick={handleCardClick(book)}
          >
            <BookImage
              alt={book.title}
              src={book.imageLinks?.thumbnail}
            />
            <BookInfo>
              <Meta
                title={<BookTitle>{book.title}</BookTitle>}
                description={<Text>{book.autores.join(", ")}</Text>}
              />
            </BookInfo>
          </StyledCard>
        </Link>
      ))}
    </>
  );
};

export default CardLivro;
