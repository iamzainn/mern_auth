const notfound = (req,res,next)=>{
  try{
   res.status(404);
   
   throw new Error('Page not exist');
  }catch(error){
   
    next(error);
  }
}

const customError = (error,req,res,next)=>{
  
   const code = res.statusCode===200 ? 500: res.statusCode;

   const message = error.message;
   return res.status(code).json({message:message});
}


export {customError,notfound};
