import styled from "styled-components";

export const ButtonContainer = styled.button`
  height: 56px;
  width: 210px;
  background: ${({ theme }) => theme.colors.backgroundButton};
  font-weight: bold;
`;
