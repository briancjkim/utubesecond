import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Data = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 20px;
  }
`;

const CompanyImage = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 20px;
  background-color: rgba(255, 255, 255, 0.5);
`;
const Title = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Info = styled.span`
  font-size: 14px;
  max-width: 100px;
  text-align: center;
`;
const Production = ({ companies }) => (
  <Container>
    <Title>Production Companies</Title>
    <Data>
      {companies &&
        companies.length > 0 &&
        companies.map((company, index) => (
          <CompanyContainer key={index}>
            <CompanyImage
              imageUrl={
                company.logo_path
                  ? `https://image.tmdb.org/t/p/original${company.logo_path}`
                  : require("../assets/default.png")
              }
            />
            <Info key={index}>{company.name}</Info>
          </CompanyContainer>
        ))}
    </Data>
  </Container>
);

export default Production;
