import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";
import s from "./SearchInput.module.css";

const SearchInput = ({ ...rest }) => {
  return (
    <div className={s.wrapper}>
      <HiMagnifyingGlass color="inherit" />
      <input className={s.input} {...rest} />
    </div>
  );
};

export default SearchInput;
