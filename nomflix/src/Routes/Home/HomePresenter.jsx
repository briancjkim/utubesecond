import PropTypes from "prop-types";
import React from "react";
import Section from "../../Components/Section";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
  padding: 20px;
`;
const TVPresenter = ({ nowPlaying, upcoming, popular, error, loading }) => (
  <>
    <Helmet>
      <title>Movies | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {nowPlaying && nowPlaying.length > 0 && (
          <Section title={"Now playing"}>
            {nowPlaying.map(movie => (
              <Poster
                key={movie.id}
                imageUrl={movie.poster_path}
                id={movie.id}
                title={movie.title}
                year={movie.release_date.substr(0, 4)}
                isMovie={true}
                rating={movie.vote_average}
              />
            ))}
          </Section>
        )}
        {upcoming && upcoming.length > 0 && (
          <Section title={"Upcoming"}>
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                imageUrl={movie.poster_path}
                id={movie.id}
                title={movie.title}
                year={movie.release_date.substr(0, 4)}
                isMovie={true}
                rating={movie.vote_average}
              />
            ))}
          </Section>
        )}
        {popular && popular.length > 0 && (
          <Section title={"Popular"}>
            {popular.map(movie => (
              <Poster
                key={movie.id}
                imageUrl={movie.poster_path}
                id={movie.id}
                title={movie.title}
                year={movie.release_date.substr(0, 4)}
                isMovie={true}
                rating={movie.vote_average}
              />
            ))}
          </Section>
        )}
        {error && <Message color={"#e74c3c"} text={error} />}
      </Container>
    )}
  </>
);

TVPresenter.propTypes = {
  nowPlaying: PropTypes.array,
  upcoming: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default TVPresenter;
