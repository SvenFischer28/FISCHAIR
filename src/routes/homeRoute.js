import express from "express";

const router = express.Router();

router.get("/", function (req, res) {
    // res.sendFile(__dirname + "/public/html/home.html")
    res.render("home")
})


router.post("/", (req, res) => {
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


export{router};