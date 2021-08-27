import React from "react";

// Own components
import { Search } from "./Search";
import { Filter } from "./Filter";

/**
 * Items to filter.
 * */
const items = [
  { id: "list", name: "List" },
  { id: "grid", name: "Grid" },
];

/**
 * Show title container with the filter and search engine.
 * @param {string} order - Filter value.
 * @param {function} onChange - Function to change the filter value.
 * @param {bool} isMobile - Bool to validate the mobile view.
 * @param {function} onSubmit - Function to call after submit is clicked.
 * */
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
