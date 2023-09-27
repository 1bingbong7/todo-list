module.exports = (app) => {
    const routes = require("express").Router();
    routes.use("/todo", require("./endpoints/todo")(app));

    return routes;
};