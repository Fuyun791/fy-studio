import styled, { css } from "styled-components";
import { ITextAttr } from ".";
import { defaultTextColor, primaryColor } from "../../commonStyle";

export const StyledText = styled.span<Omit<ITextAttr, "text">>`
  color: ${({ type }) => {
    const temp = { default: defaultTextColor, primary: primaryColor };
    return temp[type];
  }};
  line-height: 1.5715;
`;
