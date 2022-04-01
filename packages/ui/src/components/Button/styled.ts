import styled, { css } from "styled-components";
import { alphaPrimaryColor, primaryColor } from "../../commonStyle";

const bgStyles = (props: { customType: string; backgroundColor: string }) => {
  if (props.customType !== "primary") {
    return css`
      background-color: transparent;
      color: ${props.backgroundColor || primaryColor};
    `;
  }
  return css`
    background-color: ${props.backgroundColor || primaryColor};
    color: #fff;
  `;
};

export const StyledButton = styled.button.attrs(
  (props: { customType: string; size: string; backgroundColor: string }) => ({
    customType: props.customType || "primary",
    size: props.size || "medium",
    backgroundColor: props.backgroundColor,
  })
)`
  border: 1px solid transparent;
  cursor: pointer;
  white-space: nowrap;
  transition: all 0.1s linear;
  padding: 0 15px;
  font-size: 14px;

  ${(props) => bgStyles(props)}

  :hover {
    background-color: ${(props) =>
      props.customType === "primary" ? primaryColor : alphaPrimaryColor};
  }

  height: ${(props) => {
    switch (props.size) {
      case "small":
        return "28px";
      case "medium":
        return "32px";
      case "large":
        return "36px";
      default:
        return "32px";
    }
  }};
`;
