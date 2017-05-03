import React, { Component } from 'react'
import { Router, Route, IndexRoute, hashHistory, browserHistory } from "react-router";
import AppMain from "../containers/AppMain"
import Workspace from '../containers/Workspace'

//Get Globle Buffer from electron main
//const Buffer = Electron.remote.getGlobal('Buffer')
class Routes extends Component {
  componentWillMount() {
  }
  componentWillUnmount() {
  }
  render() {
    return (
       <AppMain><Workspace/></AppMain>
    )
  }
}
export default Routes