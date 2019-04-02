import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Helmet from "react-helmet";
import Collection from "../../Components/Collection";
import Videos from "../../Components/Videos";
import Production from "../../Components/Production";
import Season from "../../Components/Season";
const Container = styled.div`
  height: calc(100vh - 50px);
  width: 100vw;
  position: relative;
  padding: 50px;
`;
const BackDrop = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${props => props.bgUrl});
  background-position: center center;
  background-size: cover;
  z-index: 0;
  filter: blur(3px);
  opacity: 0.5;
`;
const Content = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  z-index: 1;
  position: relative;
  overflow: hidden;
`;
const Cover = styled.div`
  background-image: url(${props => props.bgUrl});
  height: 100%;
  width: 30%;
  background-size: cover;
  border-radius: 10px;
  background-position: center center;
`;
const Data = styled.div`
  width: 70%;
  margin-left: 20px;
  ::-webkit-scrollbar {
    width: 20px; /* remove scrollbar space */
    background: rgba(
      0,
      0,
      0,
      0.2
    ); /* optional: just make scrollbar invisible */
  }
  ::-webkit-scrollbar-thumb {
    background: rgba(204, 204, 214, 0.4);
  }
  overflow-y: scroll;
`;
const Title = styled.h3`
  font-size: 32px;
`;
const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const Item = styled.span``;
const Divider = styled.span`
  margin: 0 10px;
`;
const Overview = styled.p`
  font-size: 12px;
  line-height: 1.5;
  width: 50%;
  opacity: 0.7;
  margin-bottom: 20px;
`;
const Link = styled.a``;
const Icon = styled.img`
  height: 35px;
`;

const DetailPresenter = ({ result, error, loading }) =>
  loading ? (
    <>
      <Helmet>
        <title>loading | Nomflix</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <>
      <Helmet>
        <title>{result.title ? result.title : result.name} | Nomflix</title>
      </Helmet>
      <Container>
        <BackDrop
          bgUrl={
            result.backdrop_path
              ? `https://image.tmdb.org/t/p/original${result.backdrop_path}`
              : require("../../assets/default.png")
          }
        />
        <Content>
          <Cover
            bgUrl={
              result.poster_path
                ? `https://image.tmdb.org/t/p/original${result.poster_path}`
                : require("../../assets/default.png")
            }
          />
          <Data>
            <Title>{result.title ? result.title : result.name}</Title>
            <ItemContainer>
              <Item>
                {result.release_date
                  ? result.release_date.substr(0, 4)
                  : result.first_air_date.substr(0, 4)}
              </Item>
              <Divider>•</Divider>
              <Item>
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                  )}
              </Item>
              <Divider>•</Divider>
              <Item>{`⭐️ ${result.vote_average} / 10 `}</Item>
              {result.imdb_id && (
                <>
                  <Divider>•</Divider>
                  <Link href={`https://www.imdb.com/title/${result.imdb_id}`}>
                    <Icon src={require("../../assets/imdb.png")} />
                  </Link>
                </>
              )}
            </ItemContainer>
            <Overview>{result.overview}</Overview>
            {result.belongs_to_collection && (
              <Collection
                id={result.belongs_to_collection.id}
                title={result.belongs_to_collection.name}
                imageUrl={result.belongs_to_collection.poster_path}
              />
            )}

            {result.seasons && result.seasons.length > 0 && (
              <Season tvId={result.id} seasons={result.seasons} />
            )}
            {result.videos && result.videos.results.length > 0 && (
              <Videos videos={result.videos.results} />
            )}
            {result.production_companies && (
              <Production companies={result.production_companies} />
            )}
          </Data>
        </Content>
      </Container>
    </>
  );

DetailPresenter.propTypes = {
  result: PropTypes.object,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
