import React, { useState } from "react";
import styled from "styled-components";

//Assets
import iconArrow from "../static/down-arrow.svg";

const StyledButton = styled.button`
  border: 2px solid #000;
  background: #fff;
  width: 150px;
  height: 33px;
  display: grid;
  align-items: center;
`;

const Icon = styled.img`
  height: 15px;
  width: 15px;
`;

const ContainerMenu = styled.div`
  position: absolute;
  z-index: 10;
`;

/**
 * Dropdown to select an item.
 * @param {string} value - The name of item selected.
 * @param {object} items - Items to select.
 * @param {function} onChange - Function to call after item is clicked.
 * */
export const Filter = ({ value = "grid", onChange = () => {}, items = [] }) => {
  const [isShowList, setIsShowList] = useState(false);

  return (
    <div className="position-relative">
      <StyledButton
        className="d-flex"
        type="button"
        onClick={() => setIsShowList(!isShowList)}
      >
        <p className="mb-0 w-100">
          {items.find((item) => item?.id === value)?.name}
        </p>
        <Icon src={iconArrow} />
      </StyledButton>
      <ContainerMenu className={isShowList ? "d-block" : "d-none"}>
        {items.map((item) => (
          <StyledButton
            className="border-top-0"
            onClick={() => {
              onChange(item.id);
              setIsShowList(false);
            }}
          >
            {item.name}
          </StyledButton>
        ))}
      </ContainerMenu>
    </div>
  );
};
