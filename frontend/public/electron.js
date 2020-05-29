const {app, BrowserWindow } = require('electron')
const path = require('path')
const isDev = require('electron-is-dev')

let appWindow = null

function crearVentana() {
  appWindow = new BrowserWindow({
    center: true,
    height: 650,
    minHeight: 480,
    minWidth: 800,
    show: false, // Hasta que este lista la va a mostrar
    width: 1200,
    title: 'Administrador Pacientes Veterinaria'
 })

//  appWindow.loadUrl(
//    isDev
//     ? 'http://localhost:3000'
//     : `file://${path.join(__dirname, "../build/index.html")}`
//   );

  appWindow.loadURL('http://localhost:3000');

  // Cuando la aplicación este lista, msotrar la ventana
  appWindow.once('ready-to-show', () => {
    appWindow.show()
  })


}
app.on('ready', crearVentana)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') { // cuando no sea mac, al dar click en el botón de cerrar
    app.quit()
  }
})

app.on('activate', () => { // código de mac, cuando se de click en el icono del dock
  if(appWindow === null) {
    crearVentana()
  }
})
