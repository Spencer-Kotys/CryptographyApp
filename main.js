const { app, BrowserWindow } = require('electron')
var path = require('path')

function createWindow () {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    title: 'The Cyptography App',
    icon: path.join(__dirname, 'icons/png/64x64.png'),
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html')
  // win.webContents.openDevTools()
}

app.whenReady().then(createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
