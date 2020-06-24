import React, {Component} from 'react'
import {auth} from './../../firebase/config';
import Login from './login';
import Home from './home';

import './styles.scss';

class Admin extends Component {

    constructor(props){
        super(props);
        this.state = {
            user:{},
        }
    }

    componentDidMount() {
        this.authListener();
    }

    authListener() {
        auth.onAuthStateChanged((user) => {
            if(user) {
                this.setState({user});
            } else {
                this.setState({ user: null});
            }
        })
    }

    render() {
        return (
            <div className="login">
                {this.state.user ? (<Home />) : (<Login />)}
            </div>
        )

    }
}

export default Admin
