import {Router} from 'express';
import path from 'path';

const router = Router(); 

router.get('/', (req, res) =>{
    res.render('home')
});
export default router;