import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Login from "./Login";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Shrt from "./Shrt";
import NewShrt from "./NewShrt";
import Register from "./Register";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { shrts: [] };
    this.new = nuevo => {
      this.setState({ shrts: [nuevo] });
    };
    this.logout = () => {
      window.localStorage.clear();
      window.location = "/";
    };
  }
  render() {
    return (
      <div id="wrapper">
        {/* Navigation */}
        <nav
          className="navbar navbar-static-top"
          role="navigation"
          style={{ marginBottom: 0 }}
        >
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle"
              data-toggle="collapse"
              data-target=".navbar-collapse"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="index.html">
              Naito Short Link
            </a>
          </div>
          {/* /.navbar-header */}
          <ul className="nav navbar-top-links navbar-right">
            <li className="dropdown">
              <a className="dropdown-toggle" data-toggle="dropdown" href="#">
                <i className="fa fa-user fa-fw" />
                <i className="fa fa-caret-down" />
              </a>
              <ul className="dropdown-menu dropdown-user">
                <li>
                  <a onClick={this.logout}>
                    <i className="fa fa-sign-out fa-fw" /> Salir
                  </a>
                </li>
              </ul>
              {/* /.dropdown-user */}
            </li>
            {/* /.dropdown */}
          </ul>
          {/* /.navbar-top-links */}
          {/* /.navbar-static-side */}
        </nav>
        <div id="page-wrapper">
          <div className="row">
            <div className="col-lg-12">
              <h1 className="page-header">Dashboard SHOR TLINK</h1>
            </div>
            {/* /.col-lg-12 */}
          </div>

          <div className="row">
            <div className="col-lg-4">
              <NewShrt new={this.new} />
            </div>

            <div className="col-lg-8">
              <Shrt shrts={this.state.shrts} />
            </div>
          </div>
          {/* /.row */}
        </div>
        {/* /#page-wrapper */}
      </div>
    );
  }
}

class ROUTER extends Component {
  constructor(props) {
    super(props);

    let login = window.localStorage.getItem("user");
    if (login == null) this.state = { isLogin: false };
    else this.state = { isLogin: true };
  }

  render() {
    return (
      <Router>
        <div>
          {this.state.isLogin ? (
            <Route path="/" component={App} />
          ) : (
            <div>
              <Route path="/" exact component={Login} />
              <Route path="/register" exact component={Register} />
            </div>
          )}
        </div>
      </Router>
    );
  }
}
export default ROUTER;
