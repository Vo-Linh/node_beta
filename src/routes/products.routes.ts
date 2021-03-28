import {Router} from 'express';
import path from 'path';
import {Product} from '../entity/Products'


const router = Router(); 

router.get('/index', async(req, res) =>{
    let products = await Product.find();
    console.log(products);
    res.render('products/index' ,{products});
});
router.get('/creat', (req, res) =>{
    res.render('products/creat');
});
export default router;