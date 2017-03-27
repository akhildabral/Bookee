import electron , {app , BrowserWindow } from 'electron'

let mainWindow = null

function initialize(){
    var shouldQuit = createSingleInstance()
    if(shouldQuit) return app.quit()
    function createWindow(){
        let windowOptions = {
            width : 1000,
            height : 700,
            minHeight : 500,
            minWidth : 100,
            show: false,
            title : app.getName()
        }
        if (process.platform === 'linux') {
            //windowOptions.icon = path.join(__dirname, '/assets/app-icon/png/mainIcon.png')
        }
        mainWindow = new BrowserWindow(windowOptions)
        mainWindow.loadURL(path.join('file://', __dirname ,'../client/index.html'))
        if(debug){
            mainWindow.webCOntents.openDevTools()
            mainWindow.maximize()
        }
        mainWindow.on('close',() =>{
            mainWindow = null
        })
    }
    
    app.on('ready', ()=> {
        createWindow()
    })
    app.on('window-all-closed',()=>{
            if(process.platform !== 'darwin'){
                app.quit()
            }
    })
    app.on('activate',()=>{
        if(mainWindow === null){
            createWindow()
        }
    })
}
// Make this app a single instance app.
//
// The main window will be restored and focused instead of a second window
// opened when a person attempts to launch a second instance.
//
// Returns true if the current version of the app should quit instead of
// launching.
function createSingleInstance(){
    if(process.mas) return false
    return app.makeSingleInstance(()=>{
        if(mainWindow){
            if(mainWindow.isMinimized()) {
                mainWindow.restore()
            }
            mainWindow.focus()
        }
    })
}

//Initialize App
initialize()
