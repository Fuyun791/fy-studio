import React, { useState } from "react";
import styled, { css } from "styled-components";

// import { ITextSchema } from "./schema";

export const CommonHover = styled.div.attrs(
  (props: { isPreview: boolean }) => ({
    isPreview: props.isPreview,
  })
)`
  ${(props) => {
    if (props.isPreview) {
      return css`
        border: 1px solid transparent;
        box-sizing: border-box;

        &:hover {
          border: 1px solid #06c;
        }
      `;
    }
  }}
`;

const CommonStyles = { CommonHover };

export default CommonStyles;
