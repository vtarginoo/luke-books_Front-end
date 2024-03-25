import { Menu } from "antd";
import logoLuke from "../../assets/logoluke.png";
import styled from "styled-components";
import { useRecoilValue } from "recoil";
import { listaNavItens } from "../../state/atoms/atomNav";
import { Link } from "react-router-dom";

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

const NavBar = () => {
  const navItems = useRecoilValue(listaNavItens);

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
      <Link to="/">
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
    </>
  );
};

export default NavBar;
