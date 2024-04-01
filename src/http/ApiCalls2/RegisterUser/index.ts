import { httplog } from "../..";

interface UserData {
  username: string;
  email: string;
  password: string;
}

const postRegisterUser = async (userData: UserData) => {
  try {
    const url = "/register";
    const response = await httplog.post(url, userData);
    console.log("Requisição POST bem-sucedida");
    return response.data;
  } catch (error) {
    console.error("Erro ao fazer a requisição POST:", error);
    throw error;
  }
};

export default postRegisterUser;
