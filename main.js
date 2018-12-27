const {
  app,
  BrowserWindow,
  Menu,
  ipcMain
} = require('electron')
var fs = require('fs'),
  request = require('request');
var path = require('path');
var shell = require('shelljs');
var download = require('image-downloader');
var crypto = require('crypto');

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  })

  mainWindow.maximize()
  
  mainWindow.loadFile('index.html')

  mainWindow.on('closed', function () {
    mainWindow = null
  })

}

app.on('ready', createWindow)

app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow()
  }
})


ipcMain.on("data", async function(e, data){
  
});
