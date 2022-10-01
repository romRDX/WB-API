const app = require('./src/app');
const appWs = require('./src/app-ws');

const port = process.env.PORT || 3001;
 
const server = app.listen(port, () => {
    console.log(`App Express is running!`);
})

const wss = appWs(server);

// setInterval(() => {
//     wss.broadcast({ n: Math.random()});
// }, 2000)