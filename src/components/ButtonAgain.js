import React from "react";
import styled from "styled-components";

// Own components
import { ButtonSubmit } from "./ButtonSubmit";

const Container = styled.div`
  display: grid;
  justify-content: end;
  width: 32%;
  p {
    text-align: end;
  }
`;

export const ButtonAgain = ({ handleSubmit = () => {}, className = "" }) => (
  <Container className={className}>
    <p className="mb-0">Thank you for you vote</p>
    <ButtonSubmit
      name="Vote Again"
      className="w-auto"
      handleSubmit={() => handleSubmit(false)}
    />
  </Container>
);
