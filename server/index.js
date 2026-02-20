import express from 'express'
import cors from 'cors'
import AuthenticationRouter from './routes/AuthenticationRouter.js'
import CategoriesRouter from './routes/CategoriesRouter.js'
import QuestionsRouter from './routes/QuestionsRouter.js'
import AnswersRouter from './routes/AnswersRouter.js'


const server = express();
server.use(cors())

server.use ("/authentication", AuthenticationRouter)
server.use ("/categories", CategoriesRouter)
server.use ("/questions", QuestionsRouter)
server.use ("/answers", AnswersRouter)


server.get ("/", (req, res)=> {
    res.send("The server is running")
})

server.listen (4000, ()=> {
    console.log ("The server is running at port 4000")
})
