import mongoose from "mongoose";

const url = 'mongodb://localhost:27017/Auth_Authorization';

const dbConnection =  async()=>{

    try{
        await mongoose.connect(url);
        console.log('Database is connected successfully ')
    }
    catch(e){
        console.log("Error in connection to database...")
        console.error(e.message);
    }
   
}
export default dbConnection;


