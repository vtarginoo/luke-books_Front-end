import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./pages/rotas";

import ApolloClientProvider from "./graphql/ApolloClientProvider";

function App() {
  return (
    <ApolloClientProvider>
      <BrowserRouter>
        <Rotas />
      </BrowserRouter>
    </ApolloClientProvider>
  );
}

export default App;
