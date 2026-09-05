const jwt = require("jsonwebtoken");
function authGuard(req,res,next){
    try  {
        const authorization = req.headers.authorization;
        if (!authorization) {
            throw new Error();
        }
        const token = authorization.split(" ")[1];
        const payload = jwt.verify(token, process.env.JWTSECRET);
        req.user = payload;
        next();
    }catch(err){
        console.error(err);
    }
}
module.exports = authGuard;