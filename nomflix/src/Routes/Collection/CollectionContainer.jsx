import React from "react";
import CollectionPresenter from "./CollectionPresenter";
import { collectionApi } from "../../api";

class CollectionContainer extends React.Component {
  state = {
    result: null,
    error: "",
    loading: true
  };
  async componentDidMount() {
    const {
      match: {
        params: { id }
      },
      history: { push }
    } = this.props;
    const parsedId = parseInt(id);
    if (isNaN(parsedId)) {
      push("/");
    }
    let result = null;
    try {
      this.setState({ loading: true });
      ({ data: result } = await collectionApi.collectionDetail(parsedId));
    } catch (error) {
      this.setState({ error: "Can't find anything" });
    } finally {
      this.setState({
        loading: false,
        result
      });
    }
  }
  render() {
    {
      console.log(this.state);
    }
    const { result, error, loading } = this.state;
    return (
      <CollectionPresenter result={result} error={error} loading={loading} />
    );
  }
}
export default CollectionContainer;
