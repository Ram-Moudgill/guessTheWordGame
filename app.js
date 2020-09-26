const express=require('express');
const path=require('path');
const app=express();
const port=process.env.PORT||3000;
const router=require('./routes/index')
app.set('view engine','ejs');
app.use('/public',express.static('public'))
app.use('/',router);
app.use('/game/easy',router);
app.use('/game/medium',router);
app.use('/game/hard',router);
app.listen(port,()=>
{
    console.log(`Server is listening on http://127.0.0.1:${port}`);
})