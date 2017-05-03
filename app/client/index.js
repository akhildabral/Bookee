import React from "react"
import ReactDOM from "react-dom"
import Root from './Root'
const electron = window.require('electron');
const remote = electron.remote;
import HTML5Backend from 'react-dnd-html5-backend'
import { DragDropContext } from 'react-dnd'
const DraggableRoot = DragDropContext(HTML5Backend)(Root)

//Inject Devtools if NODE_ENV is developemnt
// if (process.env.NODE_ENV == 'development') {
//     require('electron-react-devtools').install()
//   }
window.onerror = function myErrorHandler(errorMsg, url, lineNumber) {
    console.log("=============> Error occured: " + errorMsg);//or any message
    return false;
}
 const app = document.getElementById('app-entry')

//ReactDOM.render(<Provider store={store}>
ReactDOM.render(
 <DraggableRoot/>, app);