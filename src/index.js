const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const settings = require('electron-settings');

if (require('electron-squirrel-startup')) {
  app.quit();
}

const createWindow = () => {
  const electron = require('electron');
  const Menu = electron.Menu;
  Menu.setApplicationMenu(null);

  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'), // Use the preload script
    },
  });
  const iconPath = path.join(__dirname, 'asset', 'QO.ico');
  mainWindow.setIcon(iconPath);
  mainWindow.loadFile(path.join(__dirname, 'index.html'));
};

app.on('ready', () => {
  settings.configure({
    // The configuration options can be specified here if needed.
  });

  // Send 'settings-ready' message to the renderer process when settings are ready
  ipcMain.on('settings-ready', (event) => {
    event.sender.send('settings-ready', settings);
  });

  createWindow();
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on('quit', () => {
  app.quit();
});
