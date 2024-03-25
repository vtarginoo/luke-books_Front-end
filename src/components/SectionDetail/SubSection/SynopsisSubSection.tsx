import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 1rem;
  border-bottom: 2px solid #cccccc;
`;

const SynopsisText = styled.p<{ expand: boolean }>`
  margin-bottom: 1rem;
  white-space: ${({ expand }) => (expand ? "pre-wrap" : "nowrap")};
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ReadMoreButton = styled.button`
  background: none;
  border: none;
  color: blue;
  cursor: pointer;
`;

interface SynopsisSubSectionProps {
  synopsis: string;
}

const SynopsisSubSection: React.FC<SynopsisSubSectionProps> = ({
  synopsis,
}) => {
  const [expandSynopsis, setExpandSynopsis] = useState(false);

  const handleReadMore = () => {
    setExpandSynopsis(true);
  };

  return (
    <Container>
      <h2>Sinopse do Livro</h2>
      <SynopsisText expand={expandSynopsis}>{synopsis}</SynopsisText>
      {!expandSynopsis && (
        <ReadMoreButton onClick={handleReadMore}>Leia mais</ReadMoreButton>
      )}
    </Container>
  );
};

export default SynopsisSubSection;
