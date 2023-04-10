const express = require("express");
const path = require("path");
const methodOverride = require("method-override");
const checklistRouter = require("./source/routes/checklist");
const taskRouter = require("./source/routes/task");

const rootRouter = require("./source/routes/index");
require("./config/database");

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

app.set("views", path.join(__dirname, "source/views"));
app.set("view engine", "ejs");

app.use("/", rootRouter);
app.use("/checklist", checklistRouter);
app.use("/checklist", taskRouter.checklistDependentRoute);
app.use("/task", taskRouter.simple);

app.listen(3000, () => {
  console.log("O servidor foi iniciado");
});
