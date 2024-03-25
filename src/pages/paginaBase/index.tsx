import { Layout } from "antd";
import { Header } from "antd/es/layout/layout";
import NavBar from "../../components/NavBar";
import styled from "styled-components";
import { Outlet } from "react-router-dom";

const StyledLayout = styled(Layout)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const StyledHeader = styled(Header)`
  padding: 0rem;
  display: flex;
  align-items: center;
  background-color: white;
`;

const PaginaBase = () => {
  return (
    <StyledLayout>
      <StyledHeader>
        <NavBar />
      </StyledHeader>

      <Outlet />
    </StyledLayout>
  );
};

export default PaginaBase;
