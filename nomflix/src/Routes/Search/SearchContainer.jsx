import React from "react";
import SearchPresenter from "./SearchPresenter";
import { movieApi, tvApi } from "../../api";

class SearchContainer extends React.Component {
  state = {
    tvResult: null,
    movieResult: null,
    searchTerm: "",
    error: null,
    loading: false
  };
  handleSubmit = event => {
    event.preventDefault();
    const { searchTerm } = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };
  updateTerm = e => {
    const {
      target: { value }
    } = e;
    this.setState({
      searchTerm: value
    });
  };
  searchByTerm = async () => {
    const { searchTerm } = this.state;
    this.setState({ loading: true });
    try {
      const {
        data: { results: movieResult }
      } = await movieApi.search(searchTerm);
      const {
        data: { results: tvResult }
      } = await tvApi.search(searchTerm);
      this.setState({
        movieResult,
        tvResult
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({
        loading: false
      });
    }
  };
  render() {
    const { tvResult, movieResult, searchTerm, error, loading } = this.state;
    console.log(this.state);
    return (
      <SearchPresenter
        tvResult={tvResult}
        movieResult={movieResult}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}
export default SearchContainer;
