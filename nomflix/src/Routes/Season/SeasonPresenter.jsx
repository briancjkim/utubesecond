import React from "react";
import Loader from "../../Components/Loader";
import styled from "styled-components";
import Helmet from "react-helmet";
import { Link } from "react-router-dom";
import device from "../../Components/Device";

const Container = styled.div`
  position: relative;
  height: calc(100vh - 50px);
  width: 100vw;
  padding: 50px;

  @media ${device.tabPort} {
    padding: 2rem;
  }
  @media ${device.phone} {
    padding: 2rem 1rem;
  }
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
  overflow: hidden;
`;
const Cover = styled.div`
  width: 30%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-size: cover;
  background-position: center center;
  border-radius: 10px;

  @media ${device.phone} {
    width: 40%;
  }
`;

const Data = styled.div`
  ::-webkit-scrollbar {
    width: 20px;
    background: rgba(0, 0, 0, 0.2);
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214, 0.4);
  }
  overflow-y: scroll;
  width: 70%;
  height: 100%;
  padding-left: 2rem;

  @media ${device.tabPort} {
    text-align: center;
  }
  @media ${device.phone} {
    width: 60%;
    padding-left: 1rem;
    ::-webkit-scrollbar {
      width: 5px;
    }
  }
`;

const Title = styled.h3`
  font-size: 3.2rem;
  margin-bottom: 2rem;
`;
const OverView = styled.p`
  font-size: 1.4rem;
  line-height: 1.5;
  width: 90%;
  opacity: 0.7;
  margin-bottom: 4rem;

  @media ${device.tabLand} {
    width: 90%;
    margin-bottom: 2rem;
  }
  @media ${device.phone} {
    font-size: 1.2rem;
    line-height: 1.2;
  }
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
  min-height: 14rem;
  margin-bottom: 20px;
  /* because scrollbar cut marginbottom */
  /* &:last-child {
    margin-bottom: 220px;
  } */

  @media ${device.tabPort} {
    flex-direction: column;
    min-height: 25rem;
  }
`;
const PosterContainer = styled.div`
  height: 100%;
  width: 30%;

  @media ${device.tabPort} {
    width: 50%;
    height: 80%;
    margin: 0 auto;
    margin-bottom: 1rem;
  }
  @media ${device.phone} {
    width: 50%;
  }
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
  padding: 0 1rem;
  overflow: hidden;
  text-overflow: ellipsis;

  @media ${device.tabPort} {
    width: 90%;
  }
`;
const Subtitle = styled.span`
  font-size: 1.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  @media ${device.tabPort} {
    font-size: 1.3rem;
  }
`;
const SubOverView = styled.p`
  margin: 0 1rem;
  font-size: 1.2rem;
  line-height: 1.5;
  opacity: 0.7;

  @media ${device.phone} {
    line-height: 1.2;
    margin: 0;
  }
`;
const Year = styled.span`
  font-size: 1.2rem;
`;
const Divider = styled.span`
  margin: 0 1rem;
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
                        {episode.overview.length > 350
                          ? `${episode.overview.substr(0, 350)}...`
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
