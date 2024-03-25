import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import SectionCategoria from "../../components/SectionCategoria";

const StyledContent = styled(Content)`
  flex: 1;
  padding: 1rem;
`;

const ReaderHub = () => {
  return (
    <>
      <StyledContent>
        <SectionCategoria />
      </StyledContent>
    </>
  );
};

export default ReaderHub;
