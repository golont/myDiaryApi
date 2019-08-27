module.exports = app => {
    const users = require("../controllers/user.controller.js");
    app.get("/get-user/:username", users.getUser);
    app.get("/current-date/", users.getCurrentTime);
    app.post("/upd-last-post/", users.updateLastPost);
    app.post("/create-user/", users.createUser);
    app.post("/create-new-post/", users.createNewPost);
};
