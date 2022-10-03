const app = require('./src/app');
// const appWs = require('./src/app-ws');

const port = process.env.PORT || 3001;
 
const server = app.listen(port, () => {
    console.log(`App Express is running!`);
})

// const wss = appWs(server);

// setInterval(() => {
//     wss.broadcast({ n: Math.random()});
// }, 2000)

// daqui para baixo

const express = require('express');
const PORT = process.env.PORT || 3005;

function onMessage(ws, data) {

    const parsedData = JSON.parse(data);

    // if(parsedData.eventType === "pve"){
    //     pveHandler(ws, parsedData);
    // } 

    // if(parsedData.eventType === "pvp"){
    //     pvpHandler(ws, parsedData);
    // } 
    console.log("XX: ", parsedData);
    ws.send(`recebido!`);
}

const wsServer = express().listen(PORT, () => console.log(`Listening on ${PORT}`));

const { Server } = require('ws');

const wss = new Server({ wsServer });

wss.on('connection', (ws) => {
    console.log('Client connected');
    ws.on('message', data => onMessage(ws, data));
    ws.on('close', () => console.log('Client disconnected'));
});

