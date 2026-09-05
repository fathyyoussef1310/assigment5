const prisma = require('../../common/db/prisma');
const create = async (comments) => {
    const comment = await prisma.comments.createMany({
        data: comments,
    })
    return comment;
}
async function findOrCreateComment(postId, userId, content) {
    const existingComment = await prisma.comments.findFirst({
        where: {
            postId: postId,
            userId: userId,
            content: content
        }
    });
    if (existingComment) {
        return existingComment;
    }
    return await prisma.comments.create({
        data: {
            postId: postId,
            userId: userId,
            content: content
        }
    });
}
module.exports = {create, findOrCreateComment};