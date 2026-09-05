const authServices = require('./authServices')
async function register (req,res){
    try{
        const{name , email , password} = req.body;
        const createUser = await authServices.register({name, email, password});
        return res.status(201).json(
            {
                message:"Successfully registered user",
                user: createUser,
                success:true,
            });
    }catch (err){
        return res.status(400).json({
            message: err.message,
        })
    }
}
async function login (req,res){
    try {
        const{name , email , password ,age , role } = req.body;
        const loginUser = await authServices.login({email , password});
        return res.status(200).json({
            message:"Successfully logged in",
            user: loginUser,
            }
        )
    }catch (err){
        return res.status(400).json({
            message: err.message,
        })
    }
}
async function getUsersById (req,res){
    try {
        const {id} = req.params;
        const user = await authServices.getUserById(id);
        return res.status(200).json({
                message:"Success",
                user: user,
            }
        )
    }catch (err){
        return res.status(400).json({
            message: err.message,
        })
    }
}
async function getUserByEmail (req,res){
    try{
        const {email} = req.params;
        const user = await authServices.getUserByEmail(email);
        return res.status(200).json({
            message: "Successfully logged in",
            user: user,
        })
    }catch (err){
        return res.status(400).json({
            message: err.message,
        })
    }
}
async function updateUser (req,res){
    try{
        const {id} = req.params;
        const {name, email, age, role} = req.body;
        const updateUser = await authServices.updateUser({id, name, email, age, role});
        return res.status(200).json({
            message: "Successfully updated user",
            user: updateUser,
        })
    }catch (err){
        return res.status(400).json({
            message: err.message,
        })
    }
}

module.exports = {register , login,getUsersById , getUserByEmail, updateUser};