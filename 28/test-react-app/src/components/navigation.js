import React from 'react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <Link to="/">Dashboard</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}