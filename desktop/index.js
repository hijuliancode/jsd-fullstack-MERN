const { app, BrowserWindow } = require('electron');

let appWindow;
function crearVentana() {
  appWindow = new BrowserWindow({
     center: true,
     height: 650,
     minHeight: 480,
     minWidth: 800,
     width: 1200,
     show: false, // Hasta que este lista la va a mostrar
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
