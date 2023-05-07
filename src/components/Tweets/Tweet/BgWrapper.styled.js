import styled from "styled-components";
import background from "../../../images/background.png";
import backgroundRetina from "../../../images/background@2x.png";

export const BgImageWrapper = styled.div`
  display: inline-block;
  background-image: url(${background});
  background-position: center;
  background-repeat: no-repeat;
  width: 100%;
  height: 50%;
  background-size: contain;
  margin: 0 auto;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${backgroundRetina});
  }
`;
