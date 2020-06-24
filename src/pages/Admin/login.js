import React, {Component} from 'react';
import {auth} from './../../firebase/config';

import './styles.scss';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email:'',
            password:''
        }
    }

    login = e => {
        e.preventDefault();
        auth.signInWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
        }).catch((error) => {
            console.log(error);
        });
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className="loginForm">
                <h1>Login</h1>
                <form>
                    <input value={this.state.email} onChange={this.handleChange} type="email" id="emailInput" name="email" placeholder="Enter Email"></input>
                    <input value={this.state.password} onChange={this.handleChange} type="password" id="passwordInput" name="password" placeholder="Enter Password:"></input>
                    <button type="submit" onClick={this.login}>Login</button>
                </form>
            </div>
        )
    }
}

export default Login
