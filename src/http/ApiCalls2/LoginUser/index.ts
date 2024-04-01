import { httplog } from "../..";

interface LoginUserData {
  username: string;
  password: string;
}

const postLoginUser = async (LoginUserData: LoginUserData) => {
  try {
    const url = "/login";
    const response = await httplog.post(url, LoginUserData);
    console.log("Requisição POST bem-sucedida");
    console.log(response.data);
    console.log("Token de Acesso", response.data.access_token);

    return response.data;
  } catch (error) {
    console.error("Erro ao fazer a requisição POST:", error);
    throw error;
  }
};

export default postLoginUser;
