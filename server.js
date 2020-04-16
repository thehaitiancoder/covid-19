const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "dist")));

app.get("/", (req, res) => res.sendFile("dist", index.html));
app.get("*", (req, res) => res.redirect("/"));

app.listen(port, () =>
    console.log(`App listening at http://localhost:${port}`)
);
