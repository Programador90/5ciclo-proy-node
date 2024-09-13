import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/plist', async(req, res)=>{
    try{
        res.render('productos/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/padd', (req,res)=>{
    res.render('productos/add');
});

router.post('/padd', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR --------------------------------------------//

router.get('/pedit', (req,res)=>{
    res.render('productos/edit');
});

router.post('/pedit', async(req, res)=>{
    try{
        res.redirect('/plist');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//----------------------------------------------------//

export default router;



