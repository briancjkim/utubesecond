import React from "react";
import styled from "styled-components";
import device from "./Device";

const Container = styled.div`
  :not(:last-child) {
    margin-bottom: 50px;
  }
`;

const Title = styled.span`
  font-size: 14px;
  font-weight: 600;
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(125px, 1fr));
  margin-top: 25px;
  grid-gap: 25px;

  @media ${device.phone} {
    grid-template-columns: repeat(auto-fill, minmax(90px, 1fr));
  }
`;
const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <Grid>{children}</Grid>
  </Container>
);

export default Section;
