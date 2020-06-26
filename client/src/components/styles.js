import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 10px 0;
  h2 {
    margin: 0 33%;
  }
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;
`;
