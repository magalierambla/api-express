require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const todosRoutes = require("./routes/todos");

app.use(express.json()); //pour lire les objets js

app.use("/api/todos", todosRoutes);

app.listen(port, () => console.log(`listening server on port ${port}...`));
