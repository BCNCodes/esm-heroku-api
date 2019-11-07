import Router from 'express';

import create from './create.js';
import update from './update.js';
import remove from './remove.js';
import list from './list.js';
import listOne from './listOne.js';
import removeProjects from './removeProjects.js';


const router = Router();

router.route('/')
    .post(create)
    .get(list);

router.route('/:id')
    .get(listOne)
    .put(update)    
    .delete(remove);
    

router.route('/:id/projects')    
    .delete(removeProjects);
    
export default router;        