
const userModel = require("../Models/user");
const jwt = require("jsonwebtoken");

module.exports = {

    signUp: async (req, res)=> {
        const user = await userModel.findOne({
            email: req.body.email
        });
        console.log(user);
        const userDetails = req.body;
        if(! user){
            userModel.create({...userDetails}).then((data)=> {
                const name = data.name;
                console.log(name, "User name vanuuuuuu");

                const token = jwt.sign({
                    userId: data._id, email:data.email
                }, "react", {expiresIn: "1h"});
                res.send({data:data, token:token, name:name});
            }).catch((err)=> {
                res.send({err: 'Something went wrong'})
            });
        }else{
            res.send({err: 'User already exists'});
        }
    },

    LogIn: async (req, res) => {

            const user = await userModel.findOne({
                email: req.body.email,
            })
            if(user){
                if(user.password === req.body.password){
                    let token;
                    token = jwt.sign({
                        userId: user.id, email: user.email }, "react",{expiresIn: "1h"}
                        );
                    const name = user.name;
                    console.log(name);
                    res.send({success: true, name: name, token: token});
                }else{
                    res.send({passErr: "Invalid password"})
                }
            }else{
                res.send({emailErr: 'Invalid User'})
            }
    },

    user: async (req, res) => {
        console.log("vannu");
        const userId = req.user.userId;
        console.log(userId);
        
      
        try {
          const user = await userModel.findById(userId);
          if (user) {
            // User found
            const name = user.name;
            res.send({ success: true, name: name });
          } else {
            // User not found
            res.send({ success: false, message: 'User not found' });
          }
        } catch (error) {
          console.log(error);
          res.send({ success: false, message: 'Something went wrong' });
        }
      }
      

}