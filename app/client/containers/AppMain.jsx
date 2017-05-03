import React, { Component, } from 'react'
import ThemeProvider from '../themes/ThemeProvider'
class AppMain extends Component {
  componentWillMount() {
  }

  componentWillUnmount(){
    
  }
  render() {
    console.log("Props...")
    console.log(this.props)
    let {children} = this.props
    return (<ThemeProvider>
      {children}
    </ThemeProvider>
    )
  }
}

export default AppMain