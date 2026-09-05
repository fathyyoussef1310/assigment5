const express = require('express');
const app = express();
const authRouter= require('./app/auth/authrouter');
const postsRouter= require('./app/posts/postRouter');
const commentsRouter= require('./app/comments/CommentsRouter');
app.use(express.json());
app.use('/users',authRouter)
app.use('/posts',postsRouter)
app.use('/comments', commentsRouter)
app.use((err, req, res, next) => {
    res.json({
        message: err.message, success: false
    })
});

app.listen(3000 , ()=>{
    console.log("http://localhost:3000");
})