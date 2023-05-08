import slick from "../../../images/slick.svg";
import { useState } from "react";
import { Dropdown } from "./Dropdown";
import { FilterBar } from "./Filter.styled";

export const Filter = ({ filterTweets }) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  const handleFilterClick = (e) => {
    setIsFilterActive((isFilterActive) => !isFilterActive);
  };

  const handleFilterOptionClick = (e) => {
    filterTweets(e.target.className);
  };

  return (
    <>
      <FilterBar onClick={handleFilterClick}>
        Filter
        <img src={slick} alt="slick" />
      </FilterBar>
      {isFilterActive && <Dropdown filter={handleFilterOptionClick} />}
    </>
  );
};
