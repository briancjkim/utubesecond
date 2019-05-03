import React from "react";
import styled from "styled-components";
import device from "./Device";

const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;
const Title = styled.h4`
  width: 100%;
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Data = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;

  ::-webkit-scrollbar {
    height: 20px;
    width:20px;
    background:rgba(0,0,0,0.2);
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214,0.4);
  }
  overflow-x: scroll;
  overflow-y:hidden;

  @media ${device.phone} {
    ::-webkit-scrollbar {
      width: 5px; 
      height:5px;
      background:rgba(0,0,0,0.2);
      );
  }
`;
const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-right: 2rem;

    @media ${device.phone} {
      margin-right: 1rem;
    }
  }
`;

const CompanyImage = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
  margin-bottom: 2rem;
  background-color: rgba(255, 255, 255, 0.5);
`;

const Info = styled.span`
  font-size: 1.4rem;
  max-width: 100px;
  text-align: center;
  margin-bottom: 1rem;
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
