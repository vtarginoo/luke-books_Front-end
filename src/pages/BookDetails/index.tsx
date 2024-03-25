import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import SectionDetail from "../../components/SectionDetail";

const StyledContent = styled(Content)`
  flex: 1;
  padding: 1rem;
`;

const BookDetails = () => {
  return (
    <>
      <StyledContent>
        <SectionDetail />
      </StyledContent>
    </>
  );
};

export default BookDetails;
