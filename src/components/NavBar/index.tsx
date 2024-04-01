import { Menu, Tooltip, message, Modal } from "antd";
import { LogoutOutlined } from "@ant-design/icons";
import logoLuke from "../../assets/logoluke.png";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { listaNavItens } from "../../state/atoms/atomNav";
import { Link } from "react-router-dom";
import postLogoutUser from "../../http/ApiCalls2/LogoutUser/Index";

const LogoImage = styled.img`
  padding: 1.5rem 0 0 0;

  width: auto;
  max-width: 100%;
  height: auto;
  transition: width 0.3s ease;
`;

const StyledMenu = styled(Menu)`
  width: auto;
  max-width: 100%;
  flex: 1;
`;

const LogoutButton = styled.button`
  margin-left: auto; // Isso fará com que o botão fique à direita
  margin: 2rem;
`;

const LogoutIcon = styled(LogoutOutlined)`
  font-size: 1.5em; /* Defina o tamanho do ícone */
`;

const NavBar = () => {
  const navItems = useRecoilValue(listaNavItens);

  const { confirm } = Modal;

  const handleLogout = async () => {
    // Exibe um modal de confirmação
    confirm({
      title: "Tem certeza que deseja fazer logout?",
      onOk: async () => {
        try {
          // Obtém o token do usuário do sessionStorage
          const token = sessionStorage.getItem("authToken");
          console.log("Token obtido:", token);

          // Verifica se o token está presente
          if (token) {
            console.log("Token presente");

            // Chama a função postLogoutUser para fazer logout
            await postLogoutUser({ token });

            // Remove o token do sessionStorage
            sessionStorage.removeItem("authToken");
            console.log("Token removido:", sessionStorage.getItem("authToken")); // Verifica se o token foi removido corretamente

            // Redireciona para a página inicial
            window.location.href = "/";
          } else {
            // Exibe um alerta se o token não estiver presente
            message.error("Token de autenticação não encontrado");
          }
        } catch (error) {
          // Exibe um alerta em caso de erro na requisição
          message.error("Erro ao executar logout, tente novamente");
        }
      },
      onCancel() {
        // Não faz nada se o usuário cancelar o logout
      },
    });
  };

  const generateLink = (
    path: string | undefined,
    label: string | undefined
  ) => {
    return <Link to={path ? path : "/"}>{label}</Link>; // Verifica se o path está definido e usa '/' como padrão
  };

  const menuItems = navItems.map((item) => ({
    key: item.key.toString(),
    label: generateLink(item.path, item.label), // Chama a função generateLink para criar o link
  }));
  return (
    <>
      <Link to="/hub">
        <LogoImage
          src={logoLuke}
          alt="Logo"
        />
      </Link>

      <StyledMenu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={menuItems}
      ></StyledMenu>
      <Tooltip title="Logout">
        <LogoutButton onClick={handleLogout}>
          <LogoutIcon />
        </LogoutButton>
      </Tooltip>
    </>
  );
};

export default NavBar;
