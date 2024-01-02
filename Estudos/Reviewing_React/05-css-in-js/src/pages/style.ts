import styled from "styled-components";

type TitleProps = {
  font: number;
};

export const Title = styled.h1<TitleProps>`
  color: #f00;
  font-size: ${({ font }) => `${font}px`};
  span {
    font-size: 12px;
  }
`;
