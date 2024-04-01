import logoLuke from "../../assets/logoluke.png";
import { Form, Button, Input } from "antd";
import styled from "styled-components";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { Content } from "antd/es/layout/layout";
import { useState } from "react";
import RegisterModal from "./RegisterModal";
import postLoginUser from "../../http/ApiCalls2/LoginUser";
import AutoDestroyModal from "./AutoDestroyModal";

const FormItem = Form.Item;

const ContentSpace = styled(Content)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const LogoImage = styled.img`
  margin: 0 0 1rem; /* Alinhar ao centro */
  /* height: auto; */
`;

const StyledForm = styled(Form)`
  width: 100%;
  max-width: 300px;
`;

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showRegisterModal, setShowRegisterModal] = useState(false); // Estado para controlar a exibição do modal
  //   const [showAutoDestroyModal, setShowAutoDestroyModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  const handleRegisterClick = () => {
    setShowRegisterModal(true);
  };

  const handleLoginSubmit = async () => {
    const userLoginData = {
      username: username,
      password: password,
    };

    try {
      const response = await postLoginUser(userLoginData);
      const token = response.access_token; // Ajustando para pegar o token do campo "access_token" da resposta
      sessionStorage.setItem("authToken", token); // Armazenando o token no SessionStorage
      console.log("Login Realizado");

      // Redirecionando o usuário para a rota "/"
      window.location.href = "/hub";
    } catch (error) {
      console.error("Erro ao cadastrar usuário:", error);
      setModalType("error");
    }
  };

  return (
    <ContentSpace>
      <LogoImage
        src={logoLuke}
        alt="Logo"
      />
      <StyledForm className="login-form">
        <FormItem>
          <Input
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            prefix={<UserOutlined style={{ fontSize: 13 }} />}
            placeholder="Username"
          />
        </FormItem>

        <FormItem>
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            prefix={<LockOutlined style={{ fontSize: 13 }} />}
            type="password"
            placeholder="Password"
          />
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={handleLoginSubmit}
          >
            Logar
          </Button>
          Or <a onClick={handleRegisterClick}>Faça seu Cadastro!</a>
        </FormItem>
      </StyledForm>
      <RegisterModal
        showRegisterModal={showRegisterModal} // Passando o estado para o RegisterModal
        setShowRegisterModal={setShowRegisterModal}
      />

      {modalType === "error" && (
        <AutoDestroyModal
          message="Username ou senha estão incorretos. Tente Novamente!"
          timeCountDown={5}
          modalType="error"
          onClose={() => {
            setModalType(null);
          }}
        />
      )}
    </ContentSpace>
  );
};

export default LoginForm;
