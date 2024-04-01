import { http } from "../..";

const deleteBook = async (id: number | null) => {
  try {
    if (id === null) {
      console.log("ID é igual a null. Ocorreu um erro.");
      return;
    }

    const url = `/book/{livro_id}?id=${encodeURIComponent(id)}`;
    const response = await http.delete(url);
    console.log(id);

    if (response.status === 200) {
      console.log("Requisição Delete bem-sucedida");
    } else {
      console.error("Erro ao fazer a requisição PUT");
      console.log(response);
    }
  } catch (error) {
    console.error("Erro ao fazer a requisição Delete:", error);
  }
};

export default deleteBook;
