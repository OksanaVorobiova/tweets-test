import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Page = styled(NavLink)`
  padding: 15px;
  text-decoration: none;
  font-weight: 600;
  font-size: 16px;
  color: #373737;
  border-radius: 5px;

  &.active {
    background-color: #471ca9;
    color: #fff;
  }
`;
