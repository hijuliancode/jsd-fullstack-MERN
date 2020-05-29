const { app, BrowserWindow } = require('electron');

let appWindow;
function crearVentana() {
  appWindow = new BrowserWindow({
     center: true,
     height: 650,
     icon: 'icon.png',
     minHeight: 480,
     minWidth: 800,
     show: false, // Hasta que este lista la va a mostrar
     width: 1200,
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
