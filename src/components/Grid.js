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
  height: 300px;
  width: 350px;
  margin: 20px 0px;
  justify-content: space-between;
  background-image: ${(props) => `linear-gradient(
    to right,
    rgb(0 0 0 / 73%), rgb(218 218 218 / 0%),rgb(0 0 0 / 73%)
  ),
  url(${props.image})`};
  color: white;
  background-size: cover;
  position: relative;
  padding-right: 10px;
`;

const Container = styled.div`
  position: relative;
  height: 60%;
  display: flex;
  align-items: flex-end;
`;

const StyledVoteButton = styled(VoteButton)`
  height: 30px;
  width: 30px;
  position: absolute;
  bottom: 35px;
  @media (max-width: 768px) {
    bottom: 22px;
  }
`;

const StyledTextContainer = styled(TextContainer)`
  margin-left: 40px;
  width: 80%;
  h3 {
    margin-bottom: 0;
  }
  p {
    margin: 0px;
  }
`;

const StyledProgressBar = styled(ProgressBar)`
  div {
    height: 40px;
  }
  div > p {
    font-size: 1rem;
    font-weight: bold;
  }
  div > img {
    height: 30px;
    width: 30px;
  }
`;

export const Grid = ({
  data = {},
  isVoteSent,
  vote,
  handleSubmit,
  setVote,
  progress,
  setIsVoteSent,
  className,
}) => (
  <StyledCard className={className} image={getImage(data?.picture)}>
    <Container>
      <StyledTextContainer
        name={data?.name}
        description={data?.description}
        isVoteSent={isVoteSent}
      />
      <StyledVoteButton vote={getVote(progress)} isDisabled />
    </Container>
    {!isVoteSent ? (
      <ButtonGroup
        className="w-100 justify-content-end"
        category={data.category}
        voteSelected={vote}
        handleVoteSelected={(value) => setVote(value)}
        lastUpdated={data.lastUpdated}
        handleSubmit={handleSubmit}
      />
    ) : (
      <ButtonAgain
        className="w-100 justify-content-end"
        handleSubmit={(value) => setIsVoteSent(value)}
      />
    )}
    <footer className="position-absolute bottom-0 w-100 mx-0">
      <StyledProgressBar progress={progress} />
    </footer>
  </StyledCard>
);
