import React, { Component } from 'react'

import PdfRenderer from '../components/PdfRenderer'

import _ from 'lodash'


class Workspace extends Component {
constructor() {
        super()
        this.styles = {}
    }
  componentWillMount(){
     //this.props.dispatch(getWorkflfowDetails())
     this.styles = getStyles(this.props, this.context);
   }
  
  render() {
  
    return (
        <div>
         <div>Akhil</div>
         <PdfRenderer/>
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