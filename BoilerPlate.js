const express=require('express');
const path=require('path')
const app=express();
const PORT=2000;

app.use(express.json())

app.set("view engine","ejs");//ejs engine is we are using
app.set("views",path.resolve("./views"))

app.get('/',(req,res)=>{
    return res.render('Home');
})

app.listen(PORT,()=>console.log("server started at port:",PORT))