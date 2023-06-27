
const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");
const upload = require("../config/multer");
const path = require('path');


module.exports = {

    signUp: async (req, res) => {
        const user = await userModel.findOne({
            email: req.body.email
        });
        console.log(user);
        const userDetails = req.body;
        if (!user) {
            userModel.create({ ...userDetails }).then((data) => {
                const name = data.name;
                console.log(name, "User name vanuuuuuu");

                const token = jwt.sign({
                    userId: data._id, email: data.email
                }, "react", { expiresIn: "1h" });
                res.send({ data: data, token: token, name: name });
            }).catch((err) => {
                res.send({ err: 'Something went wrong' })
            });
        } else {
            res.send({ err: 'User already exists' });
        }
    },
    

    LogIn: async (req, res) => {

        console.log(req.body,"Verind ellam");

        const user = await userModel.findOne({
            email: req.body.email,
        })
        if (user) {
            if (user.password === req.body.password) {
                let token;
                token = jwt.sign({
                    userId: user.id, email: user.email
                }, "react", { expiresIn: "1h" }
                );
                const name = user.name;
                const phone = user.phone;
                const email = user.phone;
                console.log(name);
                res.send({ success: true, name: name, token: token, phone: phone, email: email });
            } else {
                res.send({ passErr: "Invalid password" })
            }
        } else {
            res.send({ emailErr: 'Invalid User' })
        }
    },

    getUser: async (req, res) => {

        console.log("working....", req.body._id);
        try {
            const user = await userModel.findById({ _id: req.body.userId });
            res.send({
                success: true,
                message: "user fetched success",
                data: user
            })
        } catch (err) {
            res.send({
                success: false,
                message: err.message
            })
        }
    },


    logout: (req, res) => {

        console.log("reached here");

        const blacklist = [];

        const token = req.headers.authorization || req.body.token;

        console.log(token, "token vanuuu da logout avum ini");
        blacklist.push(token);
        res.send({ success: true, message: 'Logged out successfully' });
    },


    uploadProfilepic: async (req, res) => {
        try {
            // Access the uploaded file using req.file
            const file = req.file;
            if (!file) {
                res.status(400).send({
                    success: false,
                    message: "No file uploaded"
                });
                return;
            }

            // Modify the file storage path and filename as needed
            const storagePath = 'uploads/profilepics/'; // Specify the storage folder for profile pictures
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            const extension = path.extname(file.originalname);
            const filename = 'profilepic-' + uniqueSuffix + extension;
            const filePath = storagePath + filename;

            // Move the uploaded file to the storage path using the configured Multer instance
            await upload.single('profilePic')(req, res, (err) => {
                if (err) {
                    throw new Error(err.message);
                }
            });

            // Update the user profile picture in the database
            await userModel.updateOne(
                { _id: req.body.userId },
                { profilePic: filePath }
            );

            res.send({
                success: true,
                message: "Profile picture uploaded successfully",
                data: filePath
            });
        } catch (err) {
            res.status(500).send({
                success: false,
                message: err.message
            });
        }
    }



}