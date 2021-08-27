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

export const VoteButton = ({
  vote,
  className = "",
  onChange = () => {},
  isVote,
  isDisabled = false,
}) => (
  <StyledButton
    type="button"
    border={isVote}
    disabled={isDisabled}
    onClick={() => onChange()}
    className={`d-block ${className}`}
    background={vote === "up" ? "#3cbbb4" : "#f9ad1d"}
  >
    <StyledIcon src={vote === "up" ? up : down} alt="vote" />
  </StyledButton>
);
