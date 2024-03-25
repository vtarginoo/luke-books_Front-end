import { Button } from "antd";
import styled from "styled-components";

const DeleteButton = styled(Button)`
  width: 10rem;

  &:hover {
    color: white;
    background-color: #169bd7;
    border-color: #169bd7; /* Altera a cor da borda para azul quando estiver em hover */
  }
`;

interface BotaoDeleteProps {
  onClick: () => void; // Tipagem para onClick
}

const BotaoDelete: React.FC<BotaoDeleteProps> = ({ onClick }) => {
  return (
    <>
      <DeleteButton
        onClick={onClick}
        type="primary"
        danger
      >
        Delete
      </DeleteButton>
    </>
  );
};

export default BotaoDelete;
