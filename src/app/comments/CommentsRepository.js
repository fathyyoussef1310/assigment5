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
async function checkCommentExistence(postId) {
    const existingComment = await prisma.comments.findFirst({
        where: {
            postId: postId,
        }
    })
    return existingComment;
}
async function commentCreation(postId) {
    const comment = await prisma.comments.findMany({
        where: {
            postId: postId
        },
        take:3,
        orderBy:[{
            createdAt: 'desc',
        } , {
            id:'desc'
        }]
    })
    return comment;
}
module.exports = {create, findOrCreateComment , commentCreation,checkCommentExistence};