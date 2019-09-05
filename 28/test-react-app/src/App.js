import React from 'react';
import './App.css';
//import Text from './components/text';
//import Iterator from './components/iterator';
import Card from './components/card';


/*function listCards(amount) {
  return Array(amount).fill(1).map((el, index) => (
    <Card key={index} />
  ));
}*/

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: props.cards
    }
  }

  addCard(number) {
    this.setState({
      cards: [...this.state.cards, {
        title: `Title ${number}`,
        body: `Body ${number}`,
        footer: `Footer ${number}`
      }]
    })
  }

  remove(index) {
    const cards = [...this.state.cards];
    cards.splice(index, 1);
    this.setState({
      cards: [...cards]
    })
  }

  render() {
    const { cards } = this.state;
    return (
      <div className="App">
        {
          cards.map((el, index) =>
            <Card title={el.title} 
                  remove={(index) => this.remove(index)} 
                  index={index} 
                  footer={el.footer} 
                  key={index}>
              {el.body}
            </Card>
          )
        }
        <button onClick={() => this.addCard(cards.length)}>Add</button>
      </div>
    );
  }
}

