import { jwtDecode } from "jwt-decode";


// Função para verificar se o usuário está autenticado
export const isAuthenticated = () => {
  // Obter o token JWT do Session Storage
  const token = sessionStorage.getItem("authToken");

  // Imprimir o token JWT no console para verificação
  console.log("Token JWT:", token);

  // Verificar se o token existe
  if (!token) {
    console.log("Token JWT não encontrado.");
    return false; // Se não houver token, o usuário não está autenticado
  }

  try {
    // Decodificar o token JWT para obter as informações do usuário
    const decodedToken = jwtDecode(token);

    // Imprimir as informações decodificadas do token no console para verificação
    console.log("Informações do token decodificado:", decodedToken);

    // Verificar se o token está expirado
    if (decodedToken.exp! < Date.now() / 1000) {
      console.log("Token JWT expirado.");
      return false; // Se o token estiver expirado, o usuário não está autenticado
    }

    // Se chegou até aqui, o token é válido e o usuário está autenticado
    console.log("Usuário autenticado.");
    return true;
  } catch (error) {
    console.error("Erro ao verificar token JWT:", error);
    return false; // Se ocorrer algum erro ao decodificar o token, o usuário não está autenticado
  }
};
