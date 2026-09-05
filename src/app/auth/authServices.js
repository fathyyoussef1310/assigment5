const authRepository = require('../auth/authRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const prisma = require("../../common/db/prisma");
const register = async function ({email, password, name}) {
    const userExists  = await authRepository.checkUserExists(email);
    if (userExists) {
        throw new Error('User already exists');
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const createdUser = await authRepository.saveUser({email,
        password:hashedPassword ,
        name});
    if (!createdUser) {
        throw  new Error('fail to create user');
    }
    return createdUser;
}
const login = async ({email, password} )=>{
    const user = await  authRepository.checkUserExists(email);
    if (!user) {
        throw  new Error('fail to login');
    }
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
        throw  new Error('Invalid Credentials');
    }
    const token = jwt.sign({
        id: user.id,
        email: user.email,
    },process.env.JWTSECRET, {expiresIn: '1h'});
    return  token;
}
const getUserById = async (id)=>{
    const user = await  authRepository.getUserById(id);
    if (!user) {
        throw  new Error('This User is missing');
    }
    return  user;
}
const getUserByEmail = async (email)=>{
    const user = await  authRepository.getUserByEmail(email);
    if (!user) {
        throw  new Error('This User is missing');
    }
    return user;
}
const updateUser = async ({id, name,email,age,role})=>{
    const user = await  authRepository.updateUser(id,{email:email,name,role});
    if (!user) {
        throw  new Error('This User is missing');
    }
    return user;
}

module.exports = {
    register,
    login,
    getUserById,
    getUserByEmail,
    updateUser,
};