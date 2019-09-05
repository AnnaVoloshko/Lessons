import React from 'react';
import { Link } from 'react-router-dom';

export default class Card extends React.Component {
    render() {
        const { title, children, footer, remove, index, id } = this.props;
        return (
            <div className="card__wrapper">
                <div className="card__header">
                    {id ? <Link to={`/cards/${id}`}>{title}</Link> : title}
                    {id ? <button onClick={() => remove(index)}>X</button> : <></>}
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