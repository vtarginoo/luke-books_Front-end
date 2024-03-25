import styled from "styled-components";
import { SelectedBookState } from "../../state/atoms/atomSearch";
import { useRecoilValue } from "recoil";
import BigCardDetail from "./BigCardDetail";

const StyledDiv = styled.div`
  width: 100%;
  height: 100%;
  gap: 1rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const SectionDetail = () => {
  const selectedBook = useRecoilValue(SelectedBookState);

  console.log("Livro Selecionado:", selectedBook);

  return (
    <StyledDiv>
      <BigCardDetail />
    </StyledDiv>
  );
};
export default SectionDetail;
