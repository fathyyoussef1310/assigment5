const prisma = require('../../common/db/prisma');
const create = async (comments) => {
    const comment = await prisma.comments.createMany({
        data: comments,
    })
    return comment;
}
module.exports = {create};