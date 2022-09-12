"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var express_1 = __importDefault(require("express"));
var app = (0, express_1["default"])();
var port = 3001;
app.get("/data", function (req, res) {
    res.json({ foo: "bar" });
});
app.listen(port, function () {
    var user = {
        userName: 'Superman',
        authenticated: false
    };
    console.log(JSON.stringify(user, null, 3));
    console.log("Example app listening at http://localhost:".concat(port));
});
