import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import lukeImage from "./assets/luke404.jpeg";
import { Link } from "react-router-dom";

const StyledContent = styled(Content)`
  flex: 1;
  padding: 1rem;
  display: flex; /* Adiciona display flex */
  align-items: center; /* Centraliza verticalmente */
  justify-content: center; /* Centraliza horizontalmente */
`;

const TextSpace = styled.div`
  align-self: flex-start; /* Alinha o TextSpace ao topo do container */
  font-size: 1rem;
  padding: 1.5rem;
`;

const StyledH1 = styled.h1`
  /* Aplica a classe .inter-medium */
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 36px;
  margin-bottom: 5px;
`;

const StyledH2 = styled.h2`
  /* Aplica a classe .inter-light */
  font-family: "Inter", sans-serif;
  padding: 0.2rem;
  font-weight: 100;
  font-size: 22px;
  margin-top: 0.5rem;
`;

const StyledH3 = styled.h3`
  /* Aplica a classe .inter-regular */
  font-family: "Inter", sans-serif;
  font-weight: 600;
  font-size: 18px;
  margin-top: 6rem;
  padding: 0 0 0 1.5rem;
`;

const Image = styled.img`
  width: 40%; /* A imagem se ajusta ao tamanho da seção */
  height: 40%; /* A imagem mantém sua proporção original */
  object-fit: cover; /* A imagem cobre completamente a seção */
`;

const Page404 = () => {
  return (
    <StyledContent>
      <TextSpace>
        <StyledH1>Pedimos Desculpas!</StyledH1>
        <StyledH2>Não foi possível encontrar a página</StyledH2>

        <Link to="/hub">
          <a>
            <StyledH3>Volte para a página do Readers Hub</StyledH3>
          </a>
        </Link>
      </TextSpace>
      <Image
        src={lukeImage}
        alt={"LukeBooks"}
      />
    </StyledContent>
  );
};

export default Page404;
