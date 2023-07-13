const express =require('express')

const app = express();

const port = 4000;
app.get('/', (req,res)=> {
    res.send("wellcome all")
})

app.listen(port, ()=>{
    console.log(`listening to the port ${port}`)
})