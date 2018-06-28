import React, { Component } from 'react';
import ListItem from './ListItem';

class Card extends Component {
  state = {};
  render() {
    let left = false;
    let right = false;
    if (this.props.cardId === 0) {
      right = true;
    } else if (this.props.cardId === 3) {
      left = true;
    } else {
      right = true;
      left = true;
    }
    const listItems = this.props.items.map(item => {
      return (
        <ListItem
          left={left}
          right={right}
          itemName={item}
          moveItemLeft={this.props.moveItemLeft}
        />
      );
    });
    return (
      <div>
        <h2 className="header">Title: {this.props.title}</h2>
        <ul>{listItems}</ul>
        <button
          onClick={() => {
            const cardName = window.prompt('Please enter new card');
            const cardIndex = this.props.cardId;
            this.props.addCard(cardIndex, cardName);
          }}
        >
          Add a card
        </button>
      </div>
    );
  }
}

export default Card;
