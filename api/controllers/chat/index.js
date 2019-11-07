import Router from 'express';
import create from './create.js';


export default io => {
    
    const router = Router();
    //const create = import('./create.js');

    router.post('/', create(io));

return router;

}