const prisma = require("../../common/db/prisma");
async function checkUserExists(email) {
    const user = await prisma.user.findUnique(
        {
            where: {
                email
            }
        }
    );
    return user;
}
async function saveUser(user) {
    const createdUser = await  prisma.user.create({
        data: {
            email: user.email,
            password: user.password,
            name: user.name,
        },
        select: {
            id: true,
            email: true,
            name: true,
        }
    });
    return createdUser;
}
async function getUserById(id) {
    const user = await prisma.user.findUnique({
        where: {
            id: Number(id),
        }
    })
    return user;
}
async function getUserByEmail(email) {
    const user = await prisma.user.findUnique(
        {
            where: {
                email: email
            },
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                createdAt: true,
                updateAt: true
            }
        }
    )
    return user;
}
async function updateUser(id , data) {
    const user = await prisma.user.update(
        {
            where: {
                id: Number(id),
            },
            data: {
                name: data.name,
                email: data.email,
                role: data.role,
            }
        }
    )
    return user;
}
module.exports = {
    checkUserExists,
    saveUser,
    getUserById,
    getUserByEmail,
    updateUser,
}