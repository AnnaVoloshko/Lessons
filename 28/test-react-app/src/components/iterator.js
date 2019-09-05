import React from 'react';
import Text from './text';

export default class Iterator extends React.Component {
    constructor(props) {
        super(props);
        this.from = props.from;
        this.state = {
            value: props.from || 0
        }
    }

    handleClick() {
        this.setState({
            value: this.state.value + 1
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div onClick={() => this.handleClick()}>
                <Text >{value}</Text>
            </div>
        )
    }
}