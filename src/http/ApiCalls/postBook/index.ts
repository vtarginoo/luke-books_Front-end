import { http } from "../..";
import { IBookInfo } from "../../../interfaces/IBookInfo";
import formDataSerializer from "./formSerializer";

const postBook = async (selectedBook: IBookInfo | null, tab: string) => {
  if (selectedBook) {
    // Chame a função formDataSerializer para obter o objeto FormData
    const formData = formDataSerializer(selectedBook, tab);

    if (formData) {
      // Verifique se o formData não é nulo
      try {
        const response = await http.post("/book", formData);

        if (response.status === 200) {
          console.log("Requisição POST bem-sucedida");
          console.log(formData);
        } else {
          console.error("Erro ao fazer a requisição POST");
          console.log(response);
        }
      } catch (error) {
        console.error("Erro ao fazer a requisição POST:", error);
      }
    } else {
      console.error("Erro ao construir o objeto FormData");
    }
  }
};

export default postBook;
