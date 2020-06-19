import React, { Component } from 'react';
import './styles.scss';

class Notification extends Component {
    render () {
        return (
            <header className="notif">
                <div className="wrap">
                    <div className="alert">
                        <span>Use code SUMMER2020 to get 10% off at checkout!</span>
                    </div>
                </div>
            </header>
        );
    }
};

export default Notification;
