import jwt from 'jsonwebtoken'


const GenerateToken = (res,userId)=>{
  const token =  jwt.sign({userId},process.env.JWT_SECTRET,{
    expiresIn:'30d'
  });


  res.cookie('jwt',token,{
    httpOnly:true,
    secure: process.env.NODE_ENV !== 'development', // Corrected here
    sameSite:"strict",
    maxAge:30*24*60*60*1000,

  })

  return token ;

}


export default GenerateToken

