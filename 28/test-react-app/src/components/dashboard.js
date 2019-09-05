import React from 'react';
import Card from './card';
import { list } from '../mocks/cards';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        }
    }

    componentDidMount() {
        list().then(cards => {
            this.setState({
                cards
            })
        })
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
                            id={el.id}
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