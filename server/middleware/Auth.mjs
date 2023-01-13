import jwt from 'jsonwebtoken';

const Auth = (req,res,next)=>{
    try{
       const token= (req.headers.authorization).split(' ')[1];
       const decoded = jwt.decode(token,process.env.SECRET_TOKEN)
       req.user=decoded
       
       next();
    }catch(error){

    }
}

export default Auth;