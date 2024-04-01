import { Layout } from "antd";

import lukeImage from "./assets/Luke_login.jpeg";
import styled from "styled-components";
import LoginForm from "../../components/LoginForm";

const LayoutContainer = styled(Layout)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
`;

const Square = styled.div`
  width: 100%;
  max-width: 40rem;
  height: auto;
  min-height: 20rem;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  border-style: solid;
  border-color: #169bd7;
`;

const LeftSection = styled.div`
  flex: 1;
  background-color: #f0f0f0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  width: 100%; /* A imagem se ajusta ao tamanho da seção */
  height: 100%; /* A imagem mantém sua proporção original */
  object-fit: cover; /* A imagem cobre completamente a seção */
`;

const RightSection = styled.div`
  flex: 1; /* Ocupa todo o espaço disponível */
  background-color: #fff; /* Cor de fundo para a seção do formulário */
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem; /* Espaçamento interno */
`;

const LoginPage: React.FC = () => {
  return (
    <LayoutContainer>
      <Square>
        <LeftSection>
          <Image
            src={lukeImage}
            alt={"LukeBooks"}
          />
        </LeftSection>
        <RightSection>
          <LoginForm />
        </RightSection>
      </Square>
    </LayoutContainer>
  );
};

export default LoginPage;
