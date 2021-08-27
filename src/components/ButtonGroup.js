import React from "react";
import styled from "styled-components";
import { getTime } from "./utils/getters";
import { VoteButton } from "./VoteButton";
import { ButtonSubmit } from "./ButtonSubmit";

const StyledText = styled.p`
  text-align: end;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const ButtonGroup = ({
  category,
  voteSelected,
  handleVoteSelected,
  lastUpdated,
  handleSubmit,
  className = "",
}) => (
  <div className={`d-grid w-50 ${className}`}>
    <StyledText className="mb-0 text-right">
      {getTime(lastUpdated)} in {category}
    </StyledText>
    <ButtonContainer>
      <VoteButton
        className="mx-2"
        vote={"up"}
        isVote={voteSelected === "up"}
        onChange={() => handleVoteSelected("up")}
      />
      <VoteButton
        className="mx-2"
        vote={"down"}
        isVote={voteSelected === "down"}
        onChange={() => handleVoteSelected("down")}
      />
      <ButtonSubmit
        className="mx-3"
        name="Vote Now"
        handleSubmit={handleSubmit}
        disabled={voteSelected === ""}
      />
    </ButtonContainer>
  </div>
);
