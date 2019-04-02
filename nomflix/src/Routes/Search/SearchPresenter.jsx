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
const Input = styled.input`
  all: unset;
  font-size: 28px;
  width: 100%;
`;
const Form = styled.form`
  margin-bottom: 50px;
  width: 100%;
`;
const SearchPresenter = ({
  tvResult,
  movieResult,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <>
    <Helmet>
      <title>Search | Nomflix</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          onChange={updateTerm}
          placeholder={"search Movies or Tv series"}
          value={searchTerm}
        />
      </Form>
      {loading ? (
        <Loader />
      ) : (
        <>
          {movieResult && movieResult.length > 0 && (
            <Section title={"Movie result"}>
              {movieResult.map(movie => (
                <Poster
                  key={movie.id}
                  imageUrl={movie.poster_path}
                  id={movie.id}
                  title={movie.title}
                  year={movie.release_date.substr(0, 4)}
                  isMovie={true}
                />
              ))}
            </Section>
          )}
          {tvResult && tvResult.length > 0 && (
            <Section title={"TV result"}>
              {tvResult.map(tv => (
                <Poster
                  key={tv.id}
                  id={tv.id}
                  title={tv.name}
                  year={tv.first_air_date.substr(0, 4)}
                  imageUrl={tv.poster_path}
                />
              ))}
            </Section>
          )}
        </>
      )}
      {error && <Message color={"#e74c3c"} text={error} />}
      {movieResult &&
        tvResult &&
        movieResult.length === 0 &&
        tvResult.length === 0 && (
          <Message color={"#95a5a6"} text={`Not found for : ${searchTerm}`} />
        )}
    </Container>
  </>
);

SearchPresenter.propTypes = {
  tvResult: PropTypes.array,
  movieResult: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default SearchPresenter;
