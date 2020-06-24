import React, {Component} from 'react';
import {auth} from './../../firebase/config';

import './styles.scss';

class Home extends Component {
   
    logout() {
        auth.signOut();
    }

    render() {
        return (
            <div>
                Admin home
                <button onClick={this.logout}> Logout</button>
            </div>
        )
    }

}

export default Home
