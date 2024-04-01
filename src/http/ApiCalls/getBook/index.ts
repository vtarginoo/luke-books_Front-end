import { useEffect, useState } from "react";
import { http } from "../..";
import { IBookInfo } from "../../../interfaces/IBookInfo";

const getBookByStatus = async (tab: string) => {
  try {
    const url = `/books/{book_status}?status=${encodeURIComponent(tab)}`;
    const response = await http.get(url);
    console.log(tab);

    if (response.status === 200) {
      console.log("Requisição GET bem-sucedida");
      console.log(response.data); // Aqui você pode acessar os dados retornados pela API
      return response.data; // Retorna os dados obtidos da requisição
    } else {
      console.error("Erro ao fazer a requisição GET");
      console.log(response);
    }
  } catch (error) {
    console.error("Erro ao fazer a requisição GET:", error);
  }
};

export const useGetBookByStatus = (tab: string) => {
  const [bookList, setBookList] = useState<IBookInfo[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getBookByStatus(tab);
        if (response && response.livros) {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const books: IBookInfo[] = response.livros.map((livro: any) => ({
            id: livro.id,
            IdGoogle: livro.idGoogle,
            title: livro.title,
            subtitle: livro.subtitle,
            autores: livro.autores,
            publisher: livro.publisher,
            publishedDate: livro.publishedDate,
            description: livro.description,
            industryIdentifiers: livro.industryIdentifiers,
            pageCount: livro.pageCount,
            printType: livro.printType,
            categories: livro.categories,
            averageRating: livro.averageRating,
            ratingsCount: livro.ratingsCount,
            imageLinks: livro.imageLinks,
            language: livro.language,
            status: livro.status,
          }));
          setBookList(books);
        }
      } catch (error) {
        console.error("Erro ao obter os dados da API:", error);
      }
    };

    fetchData();
  }, [tab]);

  return bookList;
};
