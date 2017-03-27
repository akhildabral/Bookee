import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import AppMain from "../App"
import LandingPage from '../LandingPage'
import Workspace from '../Workspace'
//Get Globle Buffer from electron main
//const Buffer = Electron.remote.getGlobal('Buffer')
class AppRouter extends Component {
  componentWillMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={AppMain}>
          <IndexRoute component={Workspace}></IndexRoute>
          <Route path='landingPage' component={LandingPage}></Route>
        </Route>
      </Router>
    )
  }
}
export default AppRouter