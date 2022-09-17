import styled from "vue3-styled-components";

export const HomeContainer = styled.div`
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

  h2,
  p {
    max-width: 80vw;
    text-align: center;
  }
`;
