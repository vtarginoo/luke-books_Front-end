import { Form, Button, Input, Modal } from "antd";
import { useState } from "react";
import { UserOutlined, LockOutlined, MailOutlined } from "@ant-design/icons";
import postRegisterUser from "../../../http/ApiCalls2/RegisterUser";
import AutoDestroyModal from "../AutoDestroyModal";

interface RMProps {
  showRegisterModal: boolean;
  setShowRegisterModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const RegisterModal: React.FC<RMProps> = ({
  showRegisterModal,
  setShowRegisterModal,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [formError, setFormError] = useState("");
  const [showAutoDestroyModal, setShowAutoDestroyModal] = useState(false);
  const [modalType, setModalType] = useState<"success" | "error" | null>(null);

  const handleCleanFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setFormError("");
  };

  const handleCancel = () => {
    setShowRegisterModal(false);
    handleCleanFields();
  };

  const handleRegisterSubmit = async () => {
    try {
      // Validar os campos do formulário
      if (!username || !email || !password) {
        setFormError("Todos os campos são obrigatórios.");
        return;
      }

      // Preparar os dados a serem enviados
      const userData = {
        username: username,
        email: email,
        password: password,
      };

      // Realizar a requisição de registro
      const response = await postRegisterUser(userData);

      // Se a requisição for bem-sucedida, exibir mensagem de sucesso
      console.log("Resposta da API:", response);
      handleCancel();
      setShowAutoDestroyModal(true);
      setModalType("success");

      console.log;
    } catch (error) {
      // Se ocorrer um erro na requisição, exibir mensagem de erro
      console.error("Erro ao cadastrar usuário:", error);
      setShowAutoDestroyModal(true);
      setModalType("error");
    }
  };
  return (
    <>
      <Modal
        title="Cadastro"
        visible={showRegisterModal}
        onCancel={handleCancel}
        footer={[
          <Button
            key="back"
            onClick={handleCancel}
          >
            Cancelar
          </Button>,
          <Button
            key="submit"
            type="primary"
            onClick={handleRegisterSubmit}
          >
            Cadastrar
          </Button>,
        ]}
      >
        <Form>
          <Form.Item
            validateStatus={formError ? "error" : ""}
            help={formError}
          >
            <Input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Nome de usuário"
              prefix={<UserOutlined />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={formError ? "error" : ""}
            help={formError}
          >
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="E-mail"
              prefix={<MailOutlined />}
            />
          </Form.Item>
          <Form.Item
            validateStatus={formError ? "error" : ""}
            help={formError}
          >
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="Senha"
              prefix={<LockOutlined />}
            />
          </Form.Item>
          {/* Adicione mais campos conforme necessário */}
        </Form>
      </Modal>

      {showAutoDestroyModal && (
        <>
          {modalType === "success" && (
            <AutoDestroyModal
              message="Usuário cadastrado com sucesso."
              timeCountDown={5}
              modalType="success"
              onClose={() => {
                setShowAutoDestroyModal(false);
                setModalType(null);
              }}
            />
          )}

          {modalType === "error" && (
            <AutoDestroyModal
              message="Erro ao cadastrar usuário. Por favor, tente novamente."
              timeCountDown={5}
              modalType="error"
              onClose={() => {
                setShowAutoDestroyModal(false);
                setModalType(null);
              }}
            />
          )}
        </>
      )}
    </>
  );
};

export default RegisterModal;
