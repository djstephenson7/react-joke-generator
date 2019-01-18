import React from 'react';
import axios from "axios";
import Joke from "./joke";

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false
  };

  loadJoke = async () => {
    this.setState({ loading: true });

    const { data: { value: { joke } } } = await axios.get("http://localhost:3001/api/v1/jokes");

    this.setState({ loading: false, joke });
  };

  render() {
    const { joke, loading } = this.state;

    return (
      <React.Fragment>
        {!joke && !loading && <div>You haven't loaded any joke yet!</div>}
        {loading && <div>Loading...</div>}
        {joke && !loading && <Joke text={joke} />}

        <button onClick={this.loadJoke} type="button">
          Load a random joke.
        </button>
      </React.Fragment>
    );
  }
}
