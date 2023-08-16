const express = require("express");
const fs = require('fs');
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const app = express();
const nodemailer = require("nodemailer");
const { find } = require("lodash");
const PORT = process.env.PORT || 3000
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("produkty", express.static(__dirname + ("public/produkty")))



app.get("/", function (req, res) {
    // res.sendFile(__dirname + "/public/html/home.html")
    res.render("home")
})


app.post("/", (req, res) => {
    var meno = req.body.meno;
    var email = req.body.email;
    var tel = req.body.tel;
    var miesto = req.body.miesto;
    var sprava = req.body.sprava;
    const html = "<h2>meno: " + meno + " </h2><h2>email: " + email + "</h2><h2>telefónne číslo: " + tel + "</h2><h2>miesto: " + miesto + "</h2><h2>správa: " + sprava + "</h2>"

    var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "svenfischer282@gmail.com",
            pass: "avnoldynhhwwgxfv"
        }
    })
    var mailOptions = {
        from: "svenfischer282@gmail.com",
        to: "sven2fischer8@gmail.com",
        subject: "Nová ponuka",
        html: html
    };
    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log("email sent" + info.response);
        }
    });
    res.render("emailPoslany");

})




// products require
const { rekuperacie } = require(__dirname + "/public/produkty/produkty.js");
//////////////////////////////////



app.get("/:produkty/:vyrobca", function (req, res) {
    const produktyParam = req.params.produkty;
    const vyrobca = req.params.vyrobca;

    if (produktyParam === "rekuperacie") {
        const renderProductsVyrobca = rekuperacie.filter(obj => obj.brand === vyrobca)
        res.render("produkty_views/produkty", { produkty: renderProductsVyrobca })
    }


})

// app.get("/rekuperacie/comair/:name", function (req, res) {
//     let nazovRekuperacie = _.upperFirst([req.params.name]);
//     let rekuperacia = rekuperacie.find(item => item.name === nazovRekuperacie);

//     res.render("produkty_views/rekuperacia", { produkt: rekuperacia })
// })

app.get("/produkty/:kategoriaP/:vyrobca/:produkt", (req, res) => {
    const kategoriaP = req.params.produkt;
    const produktP = req.params.produkt;

    if (kategoriaP == "rekuperacie") {
        let produkt = rekuperacie.find(item => item.name === produktP);
        res.render("produkty_views/produkt", { produkt: produkt })

    } else {
        let produkt = rekuperacie.find(item => item.name === produktP);
        res.render("produkty_views/produkt", { produkt: produkt })
    }
})




app.listen(PORT, function (req, res) {
    console.log("app is running on port 3000")
})