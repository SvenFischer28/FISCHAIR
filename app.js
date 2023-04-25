const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("produkty", express.static(__dirname + ("public/produkty")))


const starting_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/public/html/home.html")
    res.render("home")
})




let rekuperacie = require(__dirname + "/public/produkty/rekuperacie_comair.js");

app.get("/rekuperacie", function (req, res) {

    res.render("rekuperacie/rekuperacie", { rekuperacie: rekuperacie })
})

app.get("/rekuperacie/comair/:name", function (req, res) {
    let nazovRekuperacie = _.upperFirst([req.params.name]);
    let rekuperacia = rekuperacie.find(item => item.url === nazovRekuperacie);

    res.render("rekuperacie/rekuperacia", { rekuperacia: rekuperacia })
})






app.listen(3000, function (req, res) {
    console.log("app is running on port 3000")
})