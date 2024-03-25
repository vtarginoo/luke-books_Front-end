import http from "../..";

const putBookStatus = async (id: number | null, status: string) => {
  try {
    if (id === null) {
      console.log("ID é igual a null. Ocorreu um erro.");
      return;
    }

    const url = `/book/{livro_id}?id=${encodeURIComponent(
      id
    )}&status=${encodeURIComponent(status)}`;
    const response = await http.put(url);
    console.log(id, status);

    if (response.status === 200) {
      console.log("Requisição PUT bem-sucedida");
    } else {
      console.error("Erro ao fazer a requisição PUT");
      console.log(response);
    }
  } catch (error) {
    console.error("Erro ao fazer a requisição PUT:", error);
  }
};

export default putBookStatus;
