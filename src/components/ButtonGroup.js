import React from "react";
import styled from "styled-components";

// Own components
import { VoteButton } from "./VoteButton";
import { ButtonSubmit } from "./ButtonSubmit";

// Assets
import { getTime } from "./utils/getters";

const StyledText = styled.p`
  text-align: end;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

/**
 * Voting button group.
 * @param {function} handleSubmit - Function to call after submit is clicked.
 * @param {string} category - The category of the poll.
 * @param {string} lastUpdated - Date with the last update.
 * @param {string} voteSelected - Selected vote of the poll.
 * @param {function} handleVoteSelected - Function to call after vote is clicked.
 * @param {string} className - The class of component.
 */
export const ButtonGroup = ({
  category = "",
  voteSelected,
  handleVoteSelected,
  lastUpdated = "",
  handleSubmit = () => {},
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
