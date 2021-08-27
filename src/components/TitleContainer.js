import React from "react";

// Own components
import { Search } from "./Search";
import { Filter } from "./Filter";

// Assets
import { items } from "./utils/constans";

export const TitleContainer = ({ order, onChange, isMobile, onSubmit }) => (
  <div className="d-flex justify-content-between">
    <h2 className="my-0">Previous Rulings</h2>
    {!isMobile && (
      <div className="d-flex w-50 justify-content-between align-items-center">
        <Search onSubmit={onSubmit} />
        <Filter value={order} items={items} onChange={onChange} />
      </div>
    )}
  </div>
);
