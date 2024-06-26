import axios from "axios";

/// Chamadas Api Serviço 1 (Save Books)

// Obtenha o token JWT do SessionStorage
const token = sessionStorage.getItem("authToken");

//// Implementação do Deploy
export const http = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://rest-api-savebooks-faj3go77ja-uc.a.run.app",

  headers: {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    Authorization: `Bearer ${token}`, // Adicione o token JWT ao cabeçalho de autorização
  },
});

/// Chamadas Api Serviço 2 (Login) - Header sem Token JWT

export const httplog = axios.create({
  // baseURL: "http://localhost:6050",
  baseURL: "https://rest-api-login-faj3go77ja-uc.a.run.app",
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});

/// Chamadas Api Serviço 2 (Logout) Header com Token JWT

export const httplogToken = axios.create({
  // baseURL: "http://localhost:6050",
  baseURL: "https://rest-api-login-faj3go77ja-uc.a.run.app",

  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
});
