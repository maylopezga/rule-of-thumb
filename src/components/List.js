import React from "react";
import styled from "styled-components";

// Own components
import { VoteButton } from "./VoteButton";
import { ProgressBar } from "./ProgressBar";
import { ButtonGroup } from "./ButtonGroup";
import { ButtonAgain } from "./ButtonAgain";
import { TextContainer } from "./TextContainer";

// Assets
import { getVote, getImage } from "./utils/getters";

const StyledCard = styled.div.attrs((props) => ({
  image: props.image,
}))`
  background-repeat: no-repeat;
  height: 160px;
  margin: 20px 0px;
  background-image: ${(props) => `linear-gradient(
      to right,
      transparent,
      rgba(66, 60, 63, 1) 32%,
      rgba(111, 110, 111, 0.73)
    ),
    url(${props.image})`};
  color: white;
  background-size: contain;
  position: relative;
  padding-right: 10px;
`;

/**
 * Show the cards in list view.
 * @param {bool} isVoteSent - Bool to validate the voted.
 * @param {string} vote - Vote to select.
 * @param {object} data - Poll information.
 * @param {function} handleSubmit - Function to send the selected vote.
 * @param {object} progress - Votes information.
 * @param {function} setVote - Function to call after vote is clicked.
 * @param {function} setIsVoteSent - Function to call after retrun to vote is clicked.
 * @param {string} className - The class of component.
 * */
export const List = ({
  isVoteSent,
  data,
  vote,
  handleSubmit,
  setVote,
  progress,
  setIsVoteSent,
}) => (
  <StyledCard image={getImage(data?.picture)} data-tetsid="ListCard">
    <div className="d-flex">
      <VoteButton vote={getVote(progress)} isDisabled />
      <TextContainer
        name={data?.name}
        description={data?.description}
        isVoteSent={isVoteSent}
      />
      {!isVoteSent ? (
        <ButtonGroup
          category={data.category}
          voteSelected={vote}
          handleVoteSelected={(value) => setVote(value)}
          lastUpdated={data.lastUpdated}
          handleSubmit={handleSubmit}
        />
      ) : (
        <ButtonAgain handleSubmit={(value) => setIsVoteSent(value)} />
      )}
    </div>
    <footer className="position-absolute bottom-0 w-100 mx-0">
      <ProgressBar progress={progress} />
    </footer>
  </StyledCard>
);
