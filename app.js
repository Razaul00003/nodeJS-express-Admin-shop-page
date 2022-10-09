const express = require("express");
const path = require("path");
const adminRoute = require("./routes/admin");
const shopRoute = require("./routes/shop");
const bodyParser = require("body-parser");
const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));
//filtering path
app.use("/admin", adminRoute);
app.use(shopRoute);
//showing error page with 404 status
app.use((req, res, next) => {
  res.status(400).sendFile(path.join(__dirname, "views", "404.html"));
});
//port
app.listen(3000);
