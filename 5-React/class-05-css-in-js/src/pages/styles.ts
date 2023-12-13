import styled from "styled-components";

export const AppContainer = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  background: ${({ theme }) => theme.colors.backgroundPage};
  color: ${({ theme }) => theme.colors.text};
`;
