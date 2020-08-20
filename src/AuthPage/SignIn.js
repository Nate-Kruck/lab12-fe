import React, { Component } from 'react'

export default class SignIn extends Component {
    render() {
        const {
            handleSignIn,
            handleEmailSignIn,
            handlePasswordSignIn
        } = this.props;
        
        return (
            <div>
                <form onSubmit={handleSignIn}>
                    Sign In:
                    <label>
                        Email
                        <input onChange={handleEmailSignIn}/>
                    </label>
                    <label>
                        Password
                        <input type="password" onChange={handlePasswordSignIn}/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
