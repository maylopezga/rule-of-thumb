import styled from "styled-components";
import React, { useState } from "react";

// Own components
import { List } from "./List";
import { Grid } from "./Grid";

const StyledContainer = styled.div.attrs((props) => ({
  isMobile: props.isMobile,
}))`
  overflow: ${(props) => props.isMobile && "scroll hidden"};
  flex-wrap: ${(props) => props.isMobile && "nowrap !important"};
`;

/**
 * Show the correct view and save values in local storage.
 * @param {string} order - Filter value.
 * @param {object} data - Poll information.
 * @param {bool} isMobile - Bool to validate the mobile view.
 * */
const CardContainer = ({ order, data, isMobile }) => {
  const [vote, setVote] = useState("");
  const [isVoteSent, setIsVoteSent] = useState(false);
  const [progress, setProgress] = useState(
    JSON.parse(window.localStorage.getItem(`vote ${data.name}`)) || {}
  );

  const handleSubmit = () => {
    if (vote) {
      const votes = JSON.parse(
        window.localStorage.getItem(`vote ${data.name}`)
      );
      const value =
        vote === "up"
          ? { ...votes, positive: votes.positive + 1 }
          : { ...votes, negative: votes.negative + 1 };
      window.localStorage.setItem(`vote ${data.name}`, JSON.stringify(value));
      setProgress(value);
      setIsVoteSent(true);
      setVote("");
    }
  };

  const Component = order === "list" ? List : Grid;
  return (
    <Component
      className={isMobile && "mx-2"}
      data={data}
      handleSubmit={handleSubmit}
      isVoteSent={isVoteSent}
      setIsVoteSent={setIsVoteSent}
      progress={progress}
      vote={vote}
      setVote={setVote}
    />
  );
};

/**
 * Show poll data.
 * @param {string} order - Filter value.
 * @param {object} data - Poll information.
 * @param {bool} isMobile - Bool to validate the mobile view.
 * */
export const VoteList = ({ order, data, isMobile }) => (
  <StyledContainer
    className={order === "grid" && "justify-content-between d-flex flex-wrap"}
    isMobile={isMobile}
  >
    {data.map((value, index) => (
      <CardContainer
        data={value}
        isMobile={isMobile}
        order={isMobile ? "grid" : order}
        key={index}
      />
    ))}
  </StyledContainer>
);
