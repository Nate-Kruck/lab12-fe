import React, { Component } from 'react';
import {
    Link
} from 'react-router-dom'
import '../App.css'



export default class HomePage extends Component {
    
    render() {
        return (
            <>
            <div className="home_page">
                <h2> Time to start some chores! </h2>
                <Link to='/auth'><p>Login</p></Link>
            
            </div>
            </>
        )
    }
}
               
            