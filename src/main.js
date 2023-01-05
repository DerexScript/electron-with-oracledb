const { app, BrowserWindow } = require('electron')

const createWindow = () => {
    const win = new BrowserWindow({
        width: 1200,
        height: 600,
        minWidth: 913,
        minHeight: 631,
        maxWidth: 1201,
        maxHeight: 632,
        center: true,
        autoHideMenuBar: true,
        maximizable: false,
        fullscreenable: false,
        icon: './src/assets/img/logo.ico',
        darkTheme: true,
        webPreferences: {
            devTools: true, //set false for block open devtools
            webSecurity: false,
            nodeIntegration: true,
            contextIsolation: false,
            allowRunningInsecureContent: true
        },
    })
    win.setMenuBarVisibility(false)
    win.removeMenu()
    win.webContents.openDevTools()
    win.loadFile('./src/index.html')
}

app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})