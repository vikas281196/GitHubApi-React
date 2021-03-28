import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import "./App.css";
import Navbar from "./componenets/layout/Navbar";
import Users from "./componenets/users/Users"
import User from "./componenets/users/User"
import Search from "./componenets/users/Search";
import About from "./componenets/pages/About";


class App extends Component {

  state = {
    users: [],
    user: {},
    loading: false,

  }
  // Seawrch GitHub users
  searchUsers = async (text) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/search/users?q=${text}`);

    this.setState({
      users: res.data.items,
      loading: false
    });
  }

  // Get a single GitHub user
  getUser = async (userName) => {
    this.setState({ loading: true });

    const res = await axios.get(`https://api.github.com/users/${userName}`);

    this.setState({
      user: res.data,
      loading: false
    });
  }

  clearUsers = (e) => {
    this.setState({ users: [] });
  }

  render() {
    return (
      <Router>
        <Fragment>
          <Navbar title="GitHub Users" icon="fab fa-github" />
          <div className="container">

            <Switch>
              <Route exact path="/">
                <Search
                  searchUsers={this.searchUsers}
                  clearUsers={this.clearUsers}
                  showClear={this.state.users.length > 0 ? true : false}
                />
                <Users
                  loading={this.state.loading}
                  users={this.state.users}
                />
              </Route>

              <Route exact path="/about">
                <About />
              </Route>

              <Route exact path="/User/:userName">
                <User
                  getUser={this.getUser}
                  user={this.state.user}
                  loading={this.state.loading} />
              </Route>
            </Switch>

          </div>
        </Fragment>
      </Router>
    );
  }
}

export default App;
