import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  padding: 50px;
`;
const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  filter: blur(3px);
  opacity: 0.5;
  z-index: 0;
`;
const Content = styled.div`
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  position: relative;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;
`;

const Data = styled.div`
  width: 70%;
  height: 100%;
  padding-left: 20px;
`;

const Title = styled.h3`
  font-size: 32px;
  margin-bottom: 20px;
`;
const OverView = styled.p`
  font-size: 12px;
  line-height: 1.5;
  width: 70%;
  opacity: 0.7;
  margin-bottom: 40px;
`;

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  height: 100%;
`;
const SubContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 25%;
  margin-bottom: 20px;
`;
const PosterContainer = styled.div`
  height: 100%;
  width: 30%;
`;
const SubPoster = styled.div`
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 5px;
  height: 100%;
  width: 100%;
`;

const SubInfo = styled.div`
  width: 70%;
  padding-left: 10px;
`;
const Subtitle = styled.span`
  font-size: 15px;
  font-weight: 300;
`;
const SubOverView = styled.p`
  margin-top: 10px;
  font-size: 12px;
  line-height: 1.5;
  opacity: 0.7;
`;
const Year = styled.span`
  font-size: 12px;
`;
const Divider = styled.span`
  margin: 0 10px;
`;
const SeasonPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      {" "}
      <Helmet>
        <title>Season | Nomflix</title>
      </Helmet>
      <Container>
        <BackDrop
          bgUrl={
            result.poster_path
              ? `https://image.tmdb.org/t/p/original${result.poster_path}`
              : require("../../assets/default_backdrop.jpg")
          }
        />
        <Content>
          <Cover
            bgUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/default_cover.jpg")
            }
          />
          <Data>
            <Title>{result.name}</Title>
            <OverView>{result.overview}</OverView>{" "}
            <ItemContainer>
              {result.episodes &&
                result.episodes.length > 0 &&
                result.episodes.map((episode, index) => (
                  <SubContainer key={index}>
                    <PosterContainer>
                      <SubPoster
                        bgUrl={
                          episode.still_path
                            ? `https://image.tmdb.org/t/p/w300${
                                episode.still_path
                              }`
                            : require("../../assets/default_cover.jpg")
                        }
                      />
                    </PosterContainer>
                    <SubInfo>
                      <Subtitle>
                        {episode.episode_number}. {episode.name}
                      </Subtitle>
                      <Divider>•</Divider>
                      <Year>{episode.air_date}</Year>
                      <SubOverView>
                        {episode.overview.length > 400
                          ? `${episode.overview.substr(0, 400)}...`
                          : episode.overview}
                      </SubOverView>
                    </SubInfo>
                  </SubContainer>
                ))}
            </ItemContainer>
          </Data>
        </Content>
      </Container>
    </>
  );
export default SeasonPresenter;
