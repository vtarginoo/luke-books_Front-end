import { Button, Dropdown, Menu } from "antd";
import styled from "styled-components";

import { useRecoilValue } from "recoil";
import { listaCategoria } from "../../../state/atoms/atomCategoria";

const ButtonDiv = styled.div`
  align-items: center;
  padding: 2rem;
`;

const SpecialButton = styled(Button)<{ bookStatus: string | null }>`
  width: 10rem;
  border: 1px solid #169bd7; /* Definimos a borda com 1px de largura e cor azul */

  ${({ bookStatus }) =>
    bookStatus
      ? `
          background-color: #169bd7;
          color: white;
        `
      : `
          background-color: white;
          color: #169bd7;
        `}

  &:hover {
    color: white;
    background-color: #169bd7;
    border-color: #169bd7; /* Altera a cor da borda para azul quando estiver em hover */
  }
`;

interface BotaoAdicionarProps {
  bookStatus: string | null;
  handleClick: (status: string) => void;
}

const BotaoAdicionar: React.FC<BotaoAdicionarProps> = ({
  bookStatus,
  handleClick,
}) => {
  const categorias = useRecoilValue(listaCategoria);

  const menu = (
    <Menu>
      {categorias.map((categoria) => (
        <Menu.Item
          key={categoria.key}
          onClick={() => handleClick(categoria.tab)}
        >
          {categoria.tab}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <ButtonDiv>
      <Dropdown
        overlay={menu}
        placement="bottom"
      >
        {/* Passa a propriedade bookStatus para o SpecialButton */}
        <SpecialButton
          type="primary"
          bookStatus={bookStatus || ""}
        >
          {bookStatus === "notFound"
            ? "Adicionar à biblioteca"
            : bookStatus || ""}
        </SpecialButton>
      </Dropdown>
    </ButtonDiv>
  );
};

export default BotaoAdicionar;
