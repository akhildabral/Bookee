import React, { Component, } from 'react'
import ThemeProvider from '../themes/ThemeProvider'
class AppMain extends Component {
  componentWillMount() {
    //this.props.dispatch(getWorkflfowDetails()) 
//TODO : Listen to preferences changes or file system changes and update store eccourdingly.. 
//        or when poperties are updated from preferences panel the state can update from there
    //TODO : call dispatcher hee to update workspace store with workspace directory
    //TODO : Scan For registeriess....
  }
  componentWillUnmount(){
     //TODO : Remove poperties listener...
  }
  render() {
    console.log("Props...")
    console.log(this.props)
    let {children} = this.props
    return (<ThemeProvider>
      {children}
    </ThemeProvider>
      //  return (
      //    <Layout {...this.props}/>
    )
  }
}

export default AppMain