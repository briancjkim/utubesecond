import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import device from "./Device";

const Container = styled.div`
  width: 90%;
  margin-bottom: 20px;
  overflow: hidden;
`;
const Title = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const Seasons = styled.div`
    display: flex;
  ::-webkit-scrollbar {
    height: 10px;
    width: 10px;
    background:rgba(0,0,0,0.2);
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214,0.4);
  }
  overflow-x: auto;

  @media ${device.phone} {
    ::-webkit-scrollbar {
      width: 5px; 
      height:5px;
      background:rgba(0,0,0,0.2);
      );
  }
`;

const SLink = styled(Link)`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`;
const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin-bottom: 10px;

  @media ${device.phone} {
    width: 50px;
    height: 50px;
  }
`;
const MovieTitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 10px;
`;
const Season = ({ seasons, tvId }) => (
  <Container>
    <Title>Seasons</Title>
    <Seasons>
      {seasons.map((season, index) => {
        return (
          <SLink to={`/tv/${tvId}/season/${season.season_number}`} key={index}>
            <ImageContainer>
              <Image
                imageUrl={
                  season.poster_path
                    ? `https://image.tmdb.org/t/p/w300${season.poster_path}`
                    : require("../assets/default.png")
                }
              />
              <MovieTitle>{season.name}</MovieTitle>
            </ImageContainer>
          </SLink>
        );
      })}
    </Seasons>
  </Container>
);

export default Season;
