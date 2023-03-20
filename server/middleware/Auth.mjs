import jwt from 'jsonwebtoken';

const Auth = (req,res,next)=>{
    try{
        const cookieData = req.headers.cookie.split('=')[1];
        const data=jwt.decode(cookieData,process.env.SECRET_TOKEN);
        req.user = {UserId:data.UserId}
        next();
    }catch(error){

    }
}

export default Auth;