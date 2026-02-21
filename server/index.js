const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/auth", require("./routes/AuthenticationRouter"));
app.use("/categories", require("./routes/CategoriesRouter"));
app.use("/questions", require("./routes/QuestionsRouter"));
app.use("/answers", require("./routes/AnswersRouter"));

app.listen(4000, ()=> console.log("Coffee API running"));
