import express from "express";
import cors from "cors";
import AuthenticationRouter from "./routes/AuthenticationRouter.js";
import CategoriesRouter from "./routes/CategoriesRouter.js";
import QuestionsRouter from "./routes/QuestionsRouter.js";
import AnswersRouter from "./routes/AnswersRouter.js";

const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/auth",AuthenticationRouter);
    app.use("/categories",CategoriesRouter);
    app.use("/questions",QuestionsRouter);
    app.use("/answers",AnswersRouter);

    app.listen(4000,()=>{
    console.log("☕ Coffee API running on 4000");
    });
