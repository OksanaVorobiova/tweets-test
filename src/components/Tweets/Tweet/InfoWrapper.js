import styled from "styled-components";

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 42.5%;
  left: 25%;

  img {
    width: 62px;
    border-radius: 50%;
    border: 8px solid #ebd8ff;
    box-shadow: 0px 3.4369285106658936px 2.5776965618133545px 0px #fbf8ff inset,
      0px 3.4369285106658936px 3.4369285106658936px 0px #0000000f,
      0px -1.7184642553329468px 3.4369285106658936px 0px #ae7be3 inset;
  }

  p {
    font-weight: 500;
    font-size: 20px;
    line-height: 1.2;
    color: #ebd8ff;
    margin-top: 26px;
    margin-bottom: 0;
    font-family: "Montserrat", sans-serif;
    text-transform: uppercase;
  }

  p:last-child {
    margin-top: 16px;
  }

  button {
    width: 196px;
    margin-top: 26px;
    border-radius: 10.31px;
    padding: 14px 28px;
    color: #373737;
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 18px;
    line-height: 1.2;
    background-color: #ebd8ff;
    border: none;
    transition: 1s ease-in;
  }

  button.active,
  button:hover {
    background-color: #5cd3a8;
    transition: 1s ease-in;
  }
`;
