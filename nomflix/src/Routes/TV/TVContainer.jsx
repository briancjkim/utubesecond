import React from "react";
import TVPresenter from "./TVPresenter";
import { tvApi } from "../../api";

class TVContainer extends React.Component {
  state = {
    popular: null,
    airingToday: null,
    topRated: null,
    error: null,
    loading: true
  };
  async componentDidMount() {
    console.log("did");
    try {
      const {
        data: { results: topRated }
      } = await tvApi.topRated();
      const {
        data: { results: airingToday }
      } = await tvApi.airingToday();
      const {
        data: { results: popular }
      } = await tvApi.popular();

      this.setState({
        topRated,
        airingToday,
        popular
      });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }
  render() {
    const { popular, airingToday, topRated, error, loading } = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        airingToday={airingToday}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}
export default TVContainer;
