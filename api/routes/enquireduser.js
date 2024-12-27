const router = require("express").Router();
const EnquiredUser = require("../models/EnquiredUser");

router.post("/", async (req, res) => {
    try {
        console.log("req.body", req.body);
        const newEnquiredUser = new EnquiredUser({
            fullname: req.body.fullname,
            mobileno: req.body.mobileno,
            email: req.body.email,
            description: req.body.description,
        });

        const user = await newEnquiredUser.save();
        console.log("user", user);
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;