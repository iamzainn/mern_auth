import jwt from 'jsonwebtoken';
const createToken = function(res,userId){
    try{
      const secretKey = 'yourSecretKey'; // Replace with your actual secret key
  
      
      const payload = { userId };
    
      
      const options = {
        expiresIn: '30d', 
      };
    
      
      const token = jwt.sign(payload, secretKey, options);
      res.cookie('token', token, {
        httpOnly: true, // Makes the cookie accessible only through the HTTP(S) protocol
        maxAge: 30 * 24 * 60 * 60 * 1000, // Cookie expiration time in milliseconds (30 days)
        secure: process.env.NODE_ENV === 'production', // Set to true in production to ensure the cookie is only sent over HTTPS
      });
    
    
    
    }catch(error){
      console.error
    }
  }

  const validateToken = (req, res, next) => {
    const tokenCookie = req.cookies.token; // Replace with your actual cookie name
  
    if (!tokenCookie) {
      return res.status(401).json({ message: 'Unauthorized - Missing token' });
    }
  
    try {
      const secretKey = 'yourSecretKey'; // Replace with your actual secret key
      const decoded = jwt.verify(tokenCookie, secretKey);
      
      res.userId = decoded.userId; // Attach user ID to the request for further use
      next();
    } catch (error) {
      return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
  };

  export {createToken,validateToken};