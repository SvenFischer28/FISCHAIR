const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


const starting_content = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";

app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/public/html/home.html")
    res.render("home")
})



const rekuperacie = [
    {
        name: "rekuperacia1",
        link: "https://www.comair.sk/index.php/produkty",
        text: "This is the first rekuperacia object"
    },
    {
        name: "rekuperacia2",
        price: 200,
        text: "This is the second rekuperacia object"
    },
    {
        name: "rekuperacia3",
        price: 300,
        text: "This is the third rekuperacia object"
    },
    {
        name: "rekuperacia4",
        price: 300,
        text: "This is the third rekuperacia object"
    }
];


app.get("/rekuperacie", function (req, res) {

    res.render("rekuperacie/rekuperacie", { rekuperacie: rekuperacie })
})






app.listen(3000, function (req, res) {
    console.log("app is running on port 3000")
})