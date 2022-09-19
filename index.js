const app = require('./src/app');
const appWs = require('./src/app-ws');
 
const server = app.listen(process.env.PORT || 3001, () => {
    console.log(`App Express is running!`);
})

const wss = appWs(server);

const ss = new WebSocket.Server({
    server: app.listen(3001)
})

// setInterval(() => {
//     wss.broadcast({ n: Math.random()});
// }, 2000)