import React, { Component, } from 'react'
import { connect } from 'react-redux'
import Layout from '../components/Layout'
import { getPathRoot, getWorkflfowDetails } from '../actions/fileActions'
import ThemeProvider from '../themes/ThemeProvider'
class App extends Component {
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
const mapStateToProps = (state, ownProps) => {
  console.log("STATE ORIGINAL")
  console.log(state)
  return {
    file: state.file,
    dex: 'true'
  }
}
export default connect(mapStateToProps)(App)