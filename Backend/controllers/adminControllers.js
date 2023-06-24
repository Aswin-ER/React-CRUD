const adminModel = require("../Models/admin");
const userModel = require("../Models/user");



module.exports = {
   
    adminLogin: (req, res)=> {

        const admin = {email:'admin@gmail.com', password:'123'}

        if(admin.email === req.body.email){
            if(admin.password === req.body.password){
                console.log("success")
                res.send({success: true});
            }else{
                res.send({passErr: "Invalid password"})
            }
        }else{
            res.send({emailErr: 'Invalid admin'})
        }

    },

    getUser: async (req, res)=> {
        const users=await userModel.find()
        res.send(users)
    },

    editUser: async (req, res) => {
        const { id } = req.params;
        const { name, email, phone } = req.body;
      
        try {
          const user = await userModel.findByIdAndUpdate(id, { name, email, phone }, { new: true });
      
          if (!user) {
            return res.status(404).send('User not found');
          }
      
          res.status(200).send(user);
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      },

      deleteUser: async (req, res) => {
        const { id } = req.params;
        console.log(id, "id here");
      
        try {
          const user = await userModel.findByIdAndRemove(id);
      
          if (!user) {
            return res.status(404).send('User not found');
          }
      
          res.status(200).send('User deleted successfully');
        } catch (error) {
          console.error(error);
          res.status(500).send('Internal Server Error');
        }
      }

}