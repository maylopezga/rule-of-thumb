import React from "react";
import styled from "styled-components";

// assets
import up from "../static/up.svg";
import down from "../static/down.svg";

const StyledButton = styled.button.attrs((props) => ({
  background: props.background,
  border: props.border,
}))`
  background: ${(props) => props.background};
  border: ${(props) => (props.border ? "1px solid white" : "0px")};
  width: 40px;
  height: 40px;
`;

const StyledIcon = styled.img`
  width: 100%;
  height: 100%;
`;

/**
 * Show title container with the filter and search engine.
 * @param {string} vote - Filter value.
 * @param {function} onChange - Function to call after button is clicked.
 * @param {bool} isDisabled - Bool to disable the button.
 * @param {bool} isVote - Bool to show border of selected element.
 * @param {string} className - The class of component.
 * */
export const VoteButton = ({
  onChange = () => {},
  isDisabled = false,
  className = "",
  isVote,
  vote,
}) => (
  <StyledButton
    type="button"
    border={isVote}
    disabled={isDisabled}
    onClick={() => onChange()}
    className={`d-block ${className}`}
    background={vote === "up" ? "#3cbbb4" : "#f9ad1d"}
  >
    <StyledIcon src={vote === "up" ? up : down} alt={vote} />
  </StyledButton>
);
