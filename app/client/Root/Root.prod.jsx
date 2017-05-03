import React, { Component, PropTypes } from 'react'
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

class Root extends Component {

  constructor(props){
    super(props)
  }

  render() {
    return (
          <Routes/>
    )
  }
}

export default Root
