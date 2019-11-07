import https from 'https';
import app from './app.js';
import chatRouter from './controllers/chat/index.js'; 

import fs from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import socketIO from 'socket.io';

const __dirname = dirname(fileURLToPath(import.meta.url));



const server = https.createServer({
    key: fs.readFileSync( `${__dirname}/config/server.key`),
    cert: fs.readFileSync( `${__dirname}/config/server.cert`)
}, app)

const io = socketIO(server);


app.use('/chat', chatRouter(io));

io.on('connection', socket =>{
    console.log ('client %id new connection detected', socket.id) ;
})

server.listen(process.env.PORT);
/* , _=> {
    console.log(`Example app listening on port ${process.env.PORT}! Go to https://localhost:8443/`) });
 */    
   