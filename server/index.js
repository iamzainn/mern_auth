import  express  from "express";
import cookieParser  from 'cookie-parser';
import cors from 'cors';
import dbConnection from "./connection/connectToDatabase.js";
import { customError, notfound } from "./controllers/userError/customError.js";
import userRoute from "./Routes/userRoute.js";

dbConnection();
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(cookieParser());
app.use(cors());

app.use('/api/user/',userRoute);
app.all('*',notfound);

app.use(customError);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
