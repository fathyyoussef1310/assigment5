const prisma  = require('../../common/db/prisma')

async function create({title, content, authorId}) {
    const posts = await prisma.post.create({
        data:{
            title,
            content,
            userId:authorId
        },})
    return posts;
}
async function deletePost(id) {
 const post = await prisma.post.delete({
     where:{
         id:Number(id)
     }
 })
    return post;
}
async function Postdetailes(){
    return await  prisma.post.findMany({
        select:{
            id:true,
            title:true,
            user:{
                select:{
                    name:true,
                }
            },
            comments:{
                select: {
                    id: true,
                    content: true,
                }},
        },
    })
}
async function getCommentsCount(){
    return await prisma.post.findMany({
        select:{
            id:true,
            title:true,
            _count:{
                select:{
                    comments:true,
                }
            }
        }
    })
}
module.exports = {
    create,
    deletePost,
    commentsCount: Postdetailes,
     getCommentsCount
}
