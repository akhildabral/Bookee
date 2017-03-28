
import React , {Component} from 'react'

import PdfViewer from 'pdfviewer'
console.log("PDF VIEWER")
console.log(PdfViewer)
var staticHost = 'http://localhost:9000'

class PdfRenderer extends Component {
    constructor(props){
        super(props)
    }

    componentDidMount(){
        // normal case


        var config1 = {
        pdfUrl: '/example.pdf',
        download: false,
        staticHost : staticHost
        }
        new PdfViewer(config1).embed(document.getElementById('pdf_renderer'))
    }

    render(){
        return (
            <div id="pdf_renderer"></div>
        )
    }

}

export default PdfRenderer


