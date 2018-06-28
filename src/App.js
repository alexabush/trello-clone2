import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './Card';

class App extends Component {
  state = {
    cards: [
      {
        title: 'Card1',
        items: ['item1', 'item2', 'item3']
      },
      {
        title: 'Card2',
        items: ['item1', 'item2', 'item3']
      },
      {
        title: 'Card2',
        items: ['item1', 'item2', 'item3']
      },
      {
        title: 'Card2',
        items: ['item1', 'item2', 'item3']
      }
    ]
  };

  addCard = (cardId, cardName) => {
    this.setState(prevState => {
      const targetCard = prevState.cards.filter((card, index) => {
        return index === cardId;
      });
      debugger;
      prevState.cards[cardId].items = [...targetCard[0].items, cardName];
      return prevState;
    });
  };

  moveItemLeft = () => {
    console.log('left clicked!');
  };
  moveItemRight = () => {};

  render() {
    const cardsComponents = this.state.cards.map((card, idx) => {
      return (
        <Card
          key={idx}
          cardId={idx}
          title={card.title}
          items={card.items}
          addCard={this.addCard}
          moveItemLeft={this.moveItemLeft}
        />
      );
    });
    return (
      <div className="App">
        <ul className="cards-ul">{cardsComponents}</ul>
      </div>
    );
  }
}

export default App;
