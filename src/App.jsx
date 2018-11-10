import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute'
import Toolbar from './components/Toolbar';
import Content from './components/Content';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Book from './pages/Book';
import Sidenav from './components/Sidenav';
import Login from './pages/Login';
import Logout from './pages/Logout';
import NotFound from './pages/NotFound'
import data from './data/books';

class App extends Component {
    state = {
        user: null
    }
    login = (user) => {
        this.setState({ user }, () => this.props.history.push('/books'))
    }
    logout = () => {
        this.setState({ user: null }, () => this.props.history.push('/'))
    }
    render() {
        return (
            <div className="app">
                <Toolbar user={this.state.user}/>
                <Content>
                    <Route path="/books" component={Sidenav} />
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/login" render={ props => <Login onLogin={this.login}/> } />
                        <Route path="/logout" render={ props => <Logout onLogout={this.logout}/> } />
                        <Route path="/about" component={About} />
                        <PrivateRoute path="/books/:topic?" exact component={Books} data={data} user={this.state.user}/>
                        <PrivateRoute path="/books/:topic/:book" component={Book} data={data} user={this.state.user}/>
                        <Route component={NotFound} />
                    </Switch>
                </Content>
            </div>
        );
    }
}

export default withRouter(App);
