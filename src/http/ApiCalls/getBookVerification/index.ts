// Verifica a existência do Livro por meio do GoogleID

import http from "../..";

const getBookVerification = async (idGoogle: string) => {
  try {
    const url = `/book/{Google_id}?idGoogle=${encodeURIComponent(idGoogle)}`;
    const response = await http.get(url);
    console.log(idGoogle);

    if (response.status === 200) {
      console.log("Requisição GET bem-sucedida");
      console.log("Resposta da verificação:", response.data);
      return response.data;
    } else {
      console.error("Erro ao fazer a requisição GET");
      console.log(response);
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    // Verifica se a exceção foi lançada devido a um erro de rede
    if (error.response && error.response.status === 404) {
      console.log("Livro não encontrado 404");
      console.log("Requisição Error 404");
      console.log("Resposta da verificação:", error.response.data);
      return error.response.data;
    } else {
      console.error("Erro ao fazer a requisição GET:", error);
    }
  }
};
export default getBookVerification;
