import React, { Component } from 'react';
import {auth} from './../../firebase/config';

import './styles.scss';

class AdminHeader extends Component {

    constructor(props) {
        super(props);
        this.logout = this.logout.bind(this);
    }

    logout() {
        auth.signOut();
    }

    render () {
        return (
            <header className="notif">
                <div className="wrap">
                    <div className="group">
                        <a href="/admin">Console</a>
                        <a href="/"><button onClick={this.logout}>Logout</button></a>
                    </div>
                </div>
            </header>
        );
    }
};

export default AdminHeader;
