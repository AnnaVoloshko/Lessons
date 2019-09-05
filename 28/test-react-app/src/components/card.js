import React from 'react';
//import Text from './text';

export default class Card extends React.Component {
    render() {
        const {title, children, footer, remove, index} = this.props;
        return (
            <div className="card__wrapper">
                <div className="card__header">
                    {title } <button onClick={() => remove (index)}>X</button>
                </div>
                <div className="card__body">
                    {children}
                </div>
                <div className="card__footer">
                    {footer}
                </div>
            </div>
        )
    }
}