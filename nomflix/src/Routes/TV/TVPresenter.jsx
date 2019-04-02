import PropTypes from "prop-types";
import React from "react";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";
const Container = styled.div`
  padding: 20px;
`;
const TVPresenter = ({ topRated, airingToday, popular, error, loading }) => (
  <>
    <Helmet>
      <title>TV Shows | Nomflix</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {console.log(topRated)}
        {topRated && topRated.length > 0 && (
          <Section title={"topRated"}>
            {topRated.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                year={tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}
        {airingToday && airingToday.length > 0 && (
          <Section title={"Airing Today"}>
            {airingToday.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                year={tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
              />
            ))}
          </Section>
        )}{" "}
        {popular && popular.length > 0 && (
          <Section title={"popular"}>
            {popular.map(tv => (
              <Poster
                key={tv.id}
                id={tv.id}
                title={tv.name}
                year={tv.first_air_date.substr(0, 4)}
                imageUrl={tv.poster_path}
                rating={tv.vote_average}
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
  topRated: PropTypes.array,
  airingToday: PropTypes.array,
  popular: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};
export default TVPresenter;
