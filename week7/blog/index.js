const express = require("express");
const cors = require("cors");
require("dotenv").config();
const dbConnection = require("./config/db.config");
dbConnection();

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.REACT_APP_URI }));

/* teste de middleware
 const middleware = require("./middlewares/teste");
app.use(middleware);
 */


//ROTAS
const UsersRoute = require("./routes/users.routes");
app.use("/users", UsersRoute);

const PostsRoute = require("./routes/posts.routes");
app.use("/posts", PostsRoute);

const CommentsRoute = require("./routes/comments.routes");
app.use("/comments", CommentsRoute);

app.listen(Number(process.env.PORT), () => {
  console.log("Server up and running on port", process.env.PORT);
});
