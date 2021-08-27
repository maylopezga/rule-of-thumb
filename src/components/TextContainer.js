import React from "react";
import styled from "styled-components";

const Container = styled.div.attrs((props) => ({
  width: props.width || "40%",
}))`
  text-align: initial;
  margin-top: 20px;
  width: ${(props) => props.width};
  margin-left: 15%;
`;

const StyledText = styled.h3`
  color: white;
  font-weight: 400;
  margin-bottom: 10px;
`;

const StyledParagraph = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const TextContainer = ({
  name = "",
  description = "",
  isVoteSent = false,
  className = "",
}) => (
  <Container width={isVoteSent ? "50%" : "35%"} className={className}>
    <StyledText>{name}</StyledText>
    <StyledParagraph>{description}</StyledParagraph>
  </Container>
);
