import React, { useState, useEffect } from "react";

// Own components
import { VoteList } from "./components/VoteList";
import { TitleContainer } from "./components/TitleContainer";

// Assets
import { getData } from "./api/api";

/**
 * Component to get and show poll information.
 **/
export const Container = () => {
  const [order, setOrder] = useState("grid");
  const [info, setInfo] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 760);

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 760);
  };

  useEffect(() => {
    if (isMobile) {
      setOrder("grid");
    }
  }, [isMobile]);

  useEffect(() => {
    const { data } = getData();
    data.forEach((element) => {
      const votes = JSON.parse(
        window.localStorage.getItem(`vote ${element.name}`)
      );
      if (!votes) {
        window.localStorage.setItem(
          `vote ${element.name}`,
          JSON.stringify(element.votes)
        );
      }
    });
    setInfo(data);
    setFilteredData(data);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getValue = (value, query) => {
    const valueLowerCase = value.toLowerCase();
    return valueLowerCase.search(query.toLowerCase()) !== -1;
  };

  const handleSubmit = (query) => {
    const data = info.filter(
      (item) => getValue(item.name, query) || getValue(item.category, query)
    );
    setFilteredData(data.length === 0 ? info : data);
  };

  return (
    <div className="Container">
      <TitleContainer
        order={order}
        onChange={setOrder}
        isMobile={isMobile}
        onSubmit={handleSubmit}
      />
      <VoteList order={order} data={filteredData} isMobile={isMobile} />
    </div>
  );
};
