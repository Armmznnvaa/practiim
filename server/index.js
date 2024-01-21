let express = require("express");
let app=express();
let cors =require("cors")
app.use(cors());
let bodyParser= require("body-parser")
app.use(bodyParser.json());
let mongoose=require('mongoose')
let {Schema}=require("mongoose")
require("dotenv").config()
let port = process.env.PORT;



const MenuSchema = new Schema (
    {
        name:String,
        des:String,
        price:Number

    }
)
const Menu = mongoose.model("Menu",MenuSchema)
 
app.get("/menu",async(req,res)=>{
    let menu = await Menu.find();
    if (menu.length>0) {
        res.send(menu)
        
    }
    else{
        res.send("data not found")
    }
    

})
app.get ("/menu/:id",async(req,res)=>{
    let {id}=req.params
    let findedMenu =await Menu.findById(id)
    if (findedMenu) {
        res.send(findedMenu)
        
    }
    else{
        res.send("data not found")
    }
})
app.delete("/menu/:id",async(req,res)=>{
    let {id}=req.params
    let deletedMenu =await Menu.findByIdAndDelete(id)
    if (deletedMenu) {
        res.send(deletedMenu)

        
    }
    else{
        res.send("data not found")
    }
})
app.post("/menu",async(req,res)=>{
    let{name,des,price}=req.body
    let newData={}
    if (name) {
        newData.name=name
        
    }
    if (des) {
        newData.des=des
        
    }
    if (price) {
        newData.price=price
        
    }
    let newMenu= await Menu (newData)
    let savedMenu =await newMenu.save()
    res.send(savedMenu)
})

app.listen(port,()=>{
    console.log(`Example app listening on port ${port}`)
})
mongoose.connect("mongodb+srv://aydan:aydan123@app.5ibbxcd.mongodb.net/?retryWrites=true&w=majority")
.then(()=>console.log('Connected!'))