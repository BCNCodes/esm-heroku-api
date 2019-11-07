import express from 'express';

import {authJwt} from './middleware/auth.js'
import ctrlChat from './controllers/chat/index.js';
import ctrlStudent from './controllers/student/index.js';
import ctrlUser from './controllers/user/index.js';
import errorHandler from './middleware/error-handler.js';


const app = express();

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use('/user', ctrlUser);
app.use('/student',authJwt,ctrlStudent);

app.use(errorHandler.logError);
app.use(errorHandler.clientErrorHandler);
app.use(errorHandler.errorHandler);

export default app;