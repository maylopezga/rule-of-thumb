import greta from "../../static/greta.png";
import cristina from "../../static/cristina.png";
import elon from "../../static/elon.png";
import malala from "../../static/malala.png";
import mark from "../../static/mark.png";
import kanye from "../../static/kanye.png";

/**
 * Validate the winning vote.
 **/
export const getVote = (votes) => {
  return votes?.positive > votes?.negative ? "up" : "down";
};

/**
 * Return image to show.
 **/
export const getImage = (picture) => {
  const images = {
    "greta.png": greta,
    "cristina.png": cristina,
    "elon.png": elon,
    "malala.png": malala,
    "mark.png": mark,
    "kanye.png": kanye,
  };
  return images[picture] || greta;
};

const intervals = [
  { label: "year", seconds: 31536000 },
  { label: "month", seconds: 2592000 },
  { label: "day", seconds: 86400 },
  { label: "hour", seconds: 3600 },
  { label: "minute", seconds: 60 },
  { label: "second", seconds: 1 },
];

/**
 * Return formatted date.
 **/
export const getTime = (date) => {
  const previousDate = new Date(date).getTime();
  const seconds = Math.floor((Date.now() - previousDate) / 1000);
  const interval = intervals.find((i) => i.seconds < seconds);
  const count = Math.floor(seconds / interval?.seconds);
  return `${count} ${interval?.label}${count === 1 ? "" : "s"} ago`;
};

/**
 * Return votes in percentage.
 **/
export const getPercentage = (value, total) => {
  return ((value * 100) / total).toFixed(1);
};
