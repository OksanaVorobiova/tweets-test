import { DropdownOptions } from "./Dropdown.styled";

export const Dropdown = ({ filter }) => {
  return (
    <DropdownOptions>
      <ul onClick={filter}>
        <li className="all">All</li>
        <li className="follow">Follow</li>
        <li className="followings">Followings</li>
      </ul>
    </DropdownOptions>
  );
};
