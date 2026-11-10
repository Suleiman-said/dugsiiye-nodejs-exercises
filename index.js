const express = require('express')

const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req,res)=>{
    res.send("Hello from express server")
})
app.post("/users", (req,res)=>{
    const userData = req.body
    res.send(`user info us ${userData.name}` )
})

app.listen(port, ()=>{
    console.log("server running at: " + port)
})


