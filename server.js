/* 
stampare nel terminale (console.log) la lista aggiornata, e rispondere con uno stato 204 e nessun contenuto.


*/

const express = require("express");
const app = express();
const port = 3003;
const postRouters = require("./routers/post_list");

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.use("/api/v1/posts", postRouters);

app.get("/", (req, res) => {
  res.send("Welcome to our blog");
});
