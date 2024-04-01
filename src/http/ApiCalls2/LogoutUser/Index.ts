import { httplogToken } from "../..";

interface UserToken {
  token: string;
}

const postLogoutUser = async (UserToken: UserToken) => {
  try {
    const url = "/logout";
    const response = await httplogToken.post(url, UserToken);
    console.log("Requisição POST bem-sucedida");
    console.log(response.data);
    console.log("Token de Acesso", response.data.access_token);

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer a requisição POST:", error);
    throw error;
  }
};

export default postLogoutUser;
