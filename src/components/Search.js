import React from "react";
import { useFormik } from "formik";
import styled from "styled-components";

const StyledInput = styled.input`
  margin-right: 10px;
  border: 2px solid #000;
  height: 33px;
  width: 50%;
`;

/**
 * Component to find an element .
 * @param {function} onSubmit - Function to call after submit is clicked.
 * */
export const Search = ({ onSubmit }) => {
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    onSubmit: (values) => {
      onSubmit(values.query);
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <StyledInput
        id="query"
        name="query"
        onChange={formik.handleChange}
        value={formik.values.query}
      />
      <button
        className="bg-white border border-dark border-2"
        style={{ height: 33 }}
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
