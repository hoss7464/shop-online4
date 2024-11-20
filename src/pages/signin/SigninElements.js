import styled from "styled-components";

export const SigninContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const SigninWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 720px;
  @media only screen and (min-width: 280px) and (max-width: 768px) {
    min-height: 600px;
  }
  @media only screen and (min-width: 769px) {
    min-height: 720px;
  }
`;