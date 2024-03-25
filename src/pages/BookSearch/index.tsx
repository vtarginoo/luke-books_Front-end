import { Content } from "antd/es/layout/layout";
import styled from "styled-components";
import SectionSearch from "../../components/SectionSearch";

const StyledContent = styled(Content)`
  flex: 1;
  padding: 1rem;
`;

const BookSearch = () => {
  return (
    <>
      <StyledContent>
        <SectionSearch />
      </StyledContent>
    </>
  );
};

export default BookSearch;
