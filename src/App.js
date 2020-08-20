import React, { Component } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  
} from 'react-router-dom'
import AuthPage from './AuthPage/AuthPage.js'
import ToDoList from './ToDoList/ToDoList.js'
import HomePage from './HomePage/HomePage.js'


export default class App extends Component {
    state = {
        token: localStorage.getItem('token'),
    }

    handleToken = (token) => {
        this.setState({ token: token })
        localStorage.setItem('token', token)
    }

    clearToken = () => {
        this.setState({ token: '' })
        localStorage.setItem('token', '')
    }

    render() {
        return (
            <div className="App">
                <Router>
                  <Switch>
                    <Route
                      path='/'
                      exact
                      render={(routerProps) => <HomePage {...routerProps} />}
                    />
                    <Route
                      path='/auth'
                      exact
                      render={(routerProps) => <AuthPage {...routerProps} />}
                    />
                    <Route
                      path='/todo'
                      exact
                      render={(routerProps) => <ToDoList {...routerProps} />}
                    />
                  </Switch>
                </Router>
            </div>
        )
    }
}
                        