import styled from "styled-components";

export const DropdownOptions = styled.div`
  padding: 20px;
  margin: -15px 0 0 50%;

  border-radius: 5px;
  border: 1px solid #471ca9;
  width: 160px;
  list-style-type: none;

  ul {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: flex-start;
    padding: 0;
    gap: 0;
  }

  li {
    text-align: left;
    font-weight: 500;
    font-size: 16px;
    padding: 8px;
    width: 90%;
    border-bottom: 1px solid #471ca9;
    cursor: pointer;
  }
`;
