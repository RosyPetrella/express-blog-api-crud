const express = require("express");
const app = express();
const port = 3003;
const postRouters = require("./routers/post_list");

app.use(express.json());

app.use("/api/v1/posts", postRouters);

app.get("/", (req, res) => {
  res.send("Welcome to our blog");
});

app.use((req, res, next) => {
  res.status(404).json({ error: "Route not found" });
});

app.use((err, req, res, next) => {
  console.error("Errore:", err.message);
  res
    .status(err.status || 500)
    .json({ error: err.message || "Internal Server Error" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
