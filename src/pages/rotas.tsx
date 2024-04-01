import { Navigate, Route, Routes } from "react-router-dom";
import PaginaBase from "./paginaBase";
import ReaderHub from "./ReaderHub";
import BookSearch from "./BookSearch";
import BookDetails from "./BookDetails";
import LoginPage from "./LoginPage";
import { isAuthenticated } from "./AuthService";
import Page404 from "./Page404";

const Rotas = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={isAuthenticated() ? <Navigate to="/hub" /> : <LoginPage />} // Redireciona para a página inicial ou para o ReaderHub se o usuário estiver autenticado
      />

      <Route element={<PaginaBase />}>
        <Route
          path="/hub"
          element={isAuthenticated() ? <ReaderHub /> : <Navigate to="/" />} // Redireciona para a página inicial se o usuário não estiver autenticado
        ></Route>

        <Route
          path="/pesquisa"
          element={isAuthenticated() ? <BookSearch /> : <Navigate to="/" />} // Redireciona para a página inicial se o usuário não estiver autenticado
        ></Route>

        <Route
          path="/livro/:id"
          element={isAuthenticated() ? <BookDetails /> : <Navigate to="/" />} // Redireciona para a página inicial se o usuário não estiver autenticado
        />

        {/* Rota para capturar rotas não definidas quando o usuário está autenticado */}
        {isAuthenticated() && (
          <Route
            path="*"
            element={<Page404 />}
          />
        )}
      </Route>

      {/* Redirecionamento para a página inicial quando o usuário não está autenticado */}
      <Route
        path="*"
        element={<Navigate to="/" />}
      />
    </Routes>
  );
};

export default Rotas;
