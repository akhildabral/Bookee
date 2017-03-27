import React, { Component, PropTypes, } from 'react'
import Routes from './Routes'
//DEV
//import DevTools from '../DevTools'
const styles = {
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
  },
}
export default class Root extends Component {
  render() {
    console.log("***************** DEV MODE *************")
    console.log("Store .................")

    return (
          <Routes/>
    )
  }
}
Root.propTypes = {
  store: PropTypes.object.isRequired,
}