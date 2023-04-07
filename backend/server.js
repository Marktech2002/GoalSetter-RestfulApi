const express = require('express');
const colors = require('colors');   
const dotenv = require('dotenv').config();
const app = express();
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDb = require('./config/db');
const PORT = process.env.PORT || 5000;

connectDb();
//middlewares   
app.use(express.json());
app.use(express.urlencoded({ extended: false })) ;
app.use('/api/goals' , require('./routes/goalRoute')) ;
app.use('/api/users' , require('./routes/userRoute')) ;
app.use(errorHandler);

app.listen(PORT, ()=> {
    console.log("server is on port" , PORT) ;
  
}) 