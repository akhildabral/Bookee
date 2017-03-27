import React, { Component, } from 'react'
import { connect } from 'react-redux'
import {Header, Sidebar, Pusher} from '../components/Layout/Header'
import Footer from '../components/Layout/Footer'
import MainContainer from '../components/Layout/Container'
import _ from 'lodash'
import ModalDialog from '../components/Elements/modal/ModalDialog'
import $ from 'jquery'
import Radium from 'radium'
import {Container, Column, Row, Grid, Segment}  from "semantic-react/radium"
//import Layout from '../components/Layout'
import {getPathRoot,getWorkflfowDetails} from '../actions/fileActions'
import {addNewWorkflow} from '../actions/workflowActions'
import {toggleWorkflowInputDialog} from '../actions/uiActions'
import { createSelector } from 'reselect'
class Workspace extends Component {
constructor() {
        super()
        this.styles = {}
    }
  componentWillMount(){
     //this.props.dispatch(getWorkflfowDetails())
     this.styles = getStyles(this.props, this.context);
   }
   toggleSidebar(){
        console.log($(".ui.sidebar"))
        $(".ui.sidebar").sidebar();
	    $('table').click(function() { $('.ui.sidebar').sidebar('toggle'); });
    }
    onCloseModal(event){
        console.log("Modal CLose")
        console.log(event)
        this.props.dispatch(toggleWorkflowInputDialog())
    }
    onSubmitModal(text){
         console.log("ModalD Submit Data")
        console.log(text)
        //this.props.dispatch(toggleWorkflowInputDialog())
        this.props.dispatch(addNewWorkflow(text))
    }
    renderDialogs(dialogsArray){
        console.log("In render dialoggg...")
        return _.map(dialogsArray, (value,i) => {
        return <ModalDialog key={i} id={value.id} data={value.id} active={value.active} data={this.props.activeDialogState} title={value.title} text={value.message} state={value.state} placeholder={value.placeholder} status={value.status} onCloseModal={this.onCloseModal.bind(this)} onSubmitModal={this.onSubmitModal.bind(this)}></ModalDialog>
        })
    }
  render() {
   console.log("Props... IN WORKSPACEEEEE")
   console.log(this.props)
   
    return (
       // <Layout {...this.props}/>
       <div style={[this.styles.base]} className="pushed left right">
               
                <Pusher />
                <div style={[this.styles.base]} className="pusher">
                 <Header />
                    <Column className="resizable" width={1} style={[this.styles.sidebar.size]}><Sidebar /></Column>
                    <Column  width={15} style={[this.styles.container]} component={MainContainer}></Column>
                    {/* <Footer /> */}
                    {this.renderDialogs(this.props.dialogs)}
                   
                    
                </div>
                <Footer />
            </div>
    )
  }
}
Workspace.contextTypes = {
    uiTheme: React.PropTypes.object
};
const mapStateToProps = (state) => createSelector(
//   console.log("STATE ORIGINAL")
//   console.log(state)
//   console.log("OWNE PROPERTY>...............")
//   console.log(ownProps)
({ui}) => ({
        dialogs : ui.dialogs,
        activeDialogState : ui.activeDialogState
  }),
  (ui) => ({
   ...ui
  })
)
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
export default connect(mapStateToProps)(Radium(Workspace))