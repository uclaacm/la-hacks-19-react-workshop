import React, { Component } from 'react';

class Tweet extends React.Component {
  constructor() {
    super();
    this.state = {
      numLike: 0
    };
  }

  incrementLike = () => {
    const previousLike = this.state.numLike;
    const newState = {
      numLike: previousLike + 1
    };
    this.setState(newState);
  }

  render() {
    const numLike = this.state.numLike;
    return (
      <div>
        <h2>{this.props.tweet}</h2>
        <button onClick={this.incrementLike}>
          <span role="img" aria-label="Love">❤️</span> {numLike}
        </button>
      </div>
    );
  }
}

export default Tweet;