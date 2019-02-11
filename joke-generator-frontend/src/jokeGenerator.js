import React from 'react';
import axios from "axios";
import Joke from "./joke";

export default class JokeGenerator extends React.Component {
  state = {
    joke: null,
    loading: false
  };

  loadJoke = () => {
    this.setState({ loading: true });

    axios.get("http://localhost:3001/api/v1/jrandom")
      .then(result => {
        const joke = result.data.value.joke
        this.setState({ loading: false, joke });
      })
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
