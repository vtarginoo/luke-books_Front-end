import { useQuery } from "@apollo/client";
import { SEARCH_GBOOKS_BY_AUTHOR } from "./SearchBook/queries";

interface Book {
  authors: string;
  title: string;
  subtitle: string;
}

const ServerCallSimulator = () => {
  const autor = "Paulo Coelho";

  const { loading, error, data, refetch } = useQuery(SEARCH_GBOOKS_BY_AUTHOR, {
    variables: { autor },
  });

  const handleButtonClick = () => {
    refetch(); // Dispara a requisição ao servidor
  };

  if (loading) return <p>Carregando...</p>;
  if (error) return <p>Erro ao carregar os dados.</p>;

  return (
    <div>
      <button onClick={handleButtonClick}>Disparar Requisição</button>
      <h2>Resultado da Consulta:</h2>
      <ul>
        {data.books.map((book: Book, index: number) => (
          <li key={index}>
            <p>Autor(es): {book.authors}</p>
            <p>Título: {book.title}</p>
            <p>Subtítulo: {book.subtitle}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServerCallSimulator;
