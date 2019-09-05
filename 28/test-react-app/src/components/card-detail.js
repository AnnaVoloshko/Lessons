import React from 'react';
import { get } from '../mocks/cards';
import Card from './card';

export default class CardDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            card: null
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        get(Number(id)).then(card => {
            this.setState({
                card
            })
        })
    }


    render() {
        const { card } = this.state;
        return (
            card ? <Card title={card.title}
                footer={card.footer}>
                {card.body}
            </Card> : <div>Oooops... not found ...</div>
        )
    }
}
