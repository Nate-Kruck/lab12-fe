import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        const {
            handleSignUp,
            handleEmailSignUp,
            handlePasswordSignUp
        } = this.props;
        
        return (
            <div>
                <form onSubmit={handleSignUp}>
                    Sign Up:
                    <label>
                        Email
                        <input onChange={handleEmailSignUp}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={handlePasswordSignUp}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}