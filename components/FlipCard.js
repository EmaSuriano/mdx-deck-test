import ReactCardFlip from 'react-card-flip';
import { Image, Appear } from 'mdx-deck';

import React, { Component } from 'react';

export class FlipCard extends Component {
  state = {
    isFlipped: false,
  };

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };
  render() {
    const { image } = this.props;
    return (
      <ReactCardFlip isFlipped={this.state.isFlipped}>
        <div key="front" onClick={this.handleClick}>
          <Image
            src={image}
            height="50vh"
            width="33vh"
            css={{ margin: 'auto' }}
          />
        </div>
        <div key="back" onClick={this.handleClick}>
          <Image
            src={image}
            height="50vh"
            width="33vh"
            css={{
              margin: 'auto',
              boxShadow: 'inset 0 0 0 1000px rgba(91, 32, 138, 0.2)',
            }}
          />
        </div>
      </ReactCardFlip>
    );
  }
}

export default FlipCard;
