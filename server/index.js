import express from 'express'
import cors from 'cors'
import yourRouter from './Routers/yourRouter.js'

const server = epxress();

server.use(express.json())
server.use(cors())
server.use("/yourRouter", yourRouter)

server.get("/", (req,res)=> {
    res.send("The server is running.")
})

server.listen(4000, () => {
    console.log("The server is running at port 4000.")
})
