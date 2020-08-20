import React, { Component } from 'react'
import { signUp, signIn } from '../todo-api.js';
import SignIn from './SignIn.js'
import SignUp from './SignUp.js'

export default class AuthPage extends Component {
    state = {
        signIn: false,
        signUp: false,
        signInEmail: '',
        signInPassword: '',
        signUpEmail: '',
        signUpPassword: ''
    }

    handleSignUp = async (e) => {
        e.preventDefault();

        const user = await signUp({
            email: this.state.signUpEmail,
            password: this.state.signUpPassword
        });

        this.props.handleToken(user.body.token);
        this.props.history.push('/ToDoList');
    }


    handleSignIn = async (e) => {
        e.preventDefault();

        const user = await signIn({
            email: this.state.signInEmail,
            password: this.state.signInPassword
        });
        console.log(user.body)

        this.props.handleToken(user.body.token);
        this.props.history.push('/ToDoList');
    }

    signIn = () => {
        this.setState({ signIn: true })
    }

    signUp = () => {
        this.setState({ signUp: true })
    }

    handleSignInEmail = (e) => {
        this.setState({ signInEmail: e.target.value })
    }

    handleSignInPassword = (e) => {
        this.setState({ signInPassword: e.target.value })
    }

    handleSignUpEmail = (e) => {
        this.setState({ signUpEmail: e.target.value })
    }

    handleSignUpPassword = (e) => {
        this.setState({ signUpPassword: e.target.value })
    }

    render() {
        return (
            <div>
                <button onClick={this.signIn}>Sign In</button>
                <button onClick={this.signUp}>Sign Up</button>
                {
                    this.setState.signIn && <SignIn signIn={this.handleSignIn}
                        handleSignInEmail={this.handleSignInEmail}
                        handleSignInPassword={this.handleSignInPassword} />
                }
                {
                    this.state.signUp && <SignUp signUp={this.handleSignUp}
                        handleSignUpEmail={this.handleSignUpEmail}
                        handleSignUpPassword={this.handleSignUpPassword} />
                }
            </div>
        )
    }
}
            
        