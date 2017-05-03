import React, { Component } from 'react'

import PdfRenderer from '../components/PdfRenderer'
import Sidebar from '../components/Container/Sidebar'
import Header from '../components/Container/Header'
import Footer from '../components/Container/Footer'
import Main from '../components/Container/Main'

import _ from 'lodash'


class Workspace extends Component {
constructor() {
        super()
        this.styles = {}
    }
  componentWillMount(){
     this.styles = getStyles(this.props, this.context);
   }
  
  render() {
  
    return (
        <div>
            <Header/>
            <Main><PdfRenderer/></Main>
            <Footer/>      
       </div>

    )
  }
}

Workspace.contextTypes = {
    uiTheme: React.PropTypes.object
};


function getStyles(props, context) {
    const {uiTheme} = context
    return {
        primary: {
            background: 'white'
        },
        base: {
            width: "100%",
            height: "100%",
            margin: "0px",
            padding: "0px"
        }
    }
}
export default Workspace