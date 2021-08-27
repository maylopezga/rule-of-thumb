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

/**
 * Button to return button group to vote.
 * @param {function} handleSubmit - Function to call after submit is clicked.
 * @param {string} className - The class of component.
 */
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
