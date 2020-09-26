const express=require("express");
const router=express.Router();
router.get('/',(req,res)=>
{
    res.render('index');
})
router.get('/game/easy',(req,res)=>
{
    res.render('game');
})
router.get('/game/medium',(req,res)=>
{
    res.render('game');
})
router.get('/game/hard',(req,res)=>
{
    res.render('game');
})
module.exports=router;