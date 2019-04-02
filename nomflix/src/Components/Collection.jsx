import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 50%;
  margin-bottom: 20px;
`;
const ImageContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Image = styled.div`
  background-image: url(${props => props.imageUrl});
  height: 100px;
  width: 100px;
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
  margin-right: 20px;
`;
const Title = styled.h4`
  width: 100%;
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;
const MovieTitle = styled.span`
  font-size: 14px;
  opacity: 0.8;
`;
const Collection = ({ id, title, imageUrl }) => (
  <Container>
    <Title>Collection</Title>
    <Link to={`/collection/${id}`}>
      <ImageContainer>
        <Image imageUrl={`https://image.tmdb.org/t/p/w300${imageUrl}`} />
        <MovieTitle>{title}</MovieTitle>
      </ImageContainer>
    </Link>
  </Container>
);

export default Collection;
