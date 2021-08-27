import React from "react";
import styled from "styled-components";

// Assets
import up from "../static/up.svg";
import down from "../static/down.svg";
import { getPercentage } from "./utils/getters";

const StyledBar = styled.div.attrs((props) => ({
  width: props.width,
  background: props.background,
}))`
  width: ${(props) => props.width}%;
  background: ${(props) => props.background};
  height: 50px;
  opacity: 0.8;
  align-items: center;
  p {
    font-size: 2rem;
  }
`;

const StyledIcon = styled.img`
  width: 40px;
  height: 35px;
  padding: 5px;
`;

/**
 * Show the cards in grid view.
 * @param {string} background - Color for background.
 * @param {bool} isUp - Bool to show value in percentage.
 * @param {string} alt - Name to alt img
 * @param {number} percentage - Value of poll.
 * @param {node} icon - Image to show.
 * @param {string} className - The class of component.
 * */
const Bar = ({
  background,
  percentage,
  icon,
  alt,
  className,
  isUp = false,
}) => {
  return (
    <StyledBar
      className={`row mx-0 ${className}`}
      width={percentage}
      background={background}
    >
      {!isUp && <p className="my-0 px-0 w-auto">{percentage}%</p>}
      <StyledIcon src={icon} alt={alt} />
      {isUp && <p className="my-0 px-0 w-auto">{percentage}%</p>}
    </StyledBar>
  );
};

/**
 * Show poll results in percentage.
 * @param {object} progress - Votes information.
 * @param {string} className - The class of component.
 * */
export const ProgressBar = ({ progress = {}, className = "" }) => {
  const totalProgress = progress?.positive + progress?.negative;
  const positiveProgres = getPercentage(progress?.positive, totalProgress);

  return (
    <div className={`row mx-0 ${className}`}>
      <Bar
        className="justify-content-start px-0"
        icon={up}
        isUp
        alt="vote up"
        background="#3cbbb4"
        percentage={positiveProgres}
      />

      <Bar
        className="justify-content-end px-0"
        icon={down}
        isUp={false}
        alt="vote down"
        background="#f9ad1d"
        percentage={(100 - positiveProgres).toFixed(1)}
      />
    </div>
  );
};
