import {Router} from 'express'

const router = Router();

//--------LISTADO --------------------------------------------//
router.get('/list', async(req, res)=>{
    try{
        res.render('clientes/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------LISTADO USUARIO--------------------------------------------//
router.get('/listusuario', async(req, res)=>{
    try{
        res.render('clientes/listusuario');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR --------------------------------------------//

router.get('/add', (req,res)=>{
    res.render('clientes/add');
});

router.post('/add', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------AÑADIR USUARIO --------------------------------------------//

router.get('/addusuario', (req,res)=>{
    res.render('clientes/addusuario');
});

router.post('/addusuario', async(req, res)=>{
    try{
        res.redirect('/listusuario');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR VEHICULO--------------------------------------------//

router.get('/edit', (req,res)=>{
    res.render('clientes/edit');
});

router.post('/edit', async(req, res)=>{
    try{
        res.redirect('/list');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});

//--------ACTUALIZAR USUARIO --------------------------------------------//

router.get('/editusuario', (req,res)=>{
    res.render('clientes/editusuario');
});

router.post('/ediusuario', async(req, res)=>{
    try{
        res.redirect('/listusario');
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
});



//----------------------------------------------------//

export default router;



