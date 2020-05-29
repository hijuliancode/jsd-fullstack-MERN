const { app, BrowserWindow } = require('electron');

let appWindow;
function crearVentana() {
  appWindow = new BrowserWindow({
     
  })

  // Cuando la aplicación es cerrada
  appWindow.on('closed', () => {
    appWindow = null
  })

  // Cargar HTML
  appWindow.loadFile('./index.html')

  // Cuando la aplicación este lista, msotrar la ventana
  appWindow.once('ready-to-show', () => {
    appWindow.show()
  })
}

app.on('ready', crearVentana )
