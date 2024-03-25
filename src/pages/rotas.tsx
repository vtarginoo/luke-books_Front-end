import { Route, Routes } from "react-router-dom";
import PaginaBase from "./paginaBase";
import ReaderHub from "./ReaderHub";
import BookSearch from "./BookSearch";
import BookDetails from "./BookDetails";

const Rotas = () => {
  return (
    <Routes>
      <Route element={<PaginaBase />}>
        <Route
          path="/"
          element={<ReaderHub />}
        ></Route>

        <Route
          path="/pesquisa"
          element={<BookSearch />}
        ></Route>

        <Route
          path="/livro/:id"
          element={<BookDetails />}
        />
      </Route>
    </Routes>
  );
};

export default Rotas;
