import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  border: 1px solid white;
  background: black;
  opacity: 0.5;
  color: white;
  height: 40px;
  margin-right: 0px !important;
  width: 50%;
`;

/**
 * Button to call submit.
 * @param {bool} disabled - Bool to disable the button.
 * @param {string} name - The name of the button.
 * @param {function} handleSubmit - Function to call after submit is clicked.
 * @param {string} className - The class of component.
 * */
export const ButtonSubmit = ({
  disabled = false,
  handleSubmit = () => {},
  name = "",
  className = "",
}) => (
  <StyledButton
    className={className}
    type="submit"
    onClick={() => handleSubmit()}
    disabled={disabled}
  >
    {name}
  </StyledButton>
);
