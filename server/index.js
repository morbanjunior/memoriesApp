import express from 'express';
import bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import cors from 'cors';
import postsRoute from './routes/posts.js';
import userRoutes from './routes/user.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

app.use(bodyParser.json({ limit:  "30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:  "30mb", extended: true}));
app.use(cors());

//post request
app.use('/posts', postsRoute);
app.use('/user', userRoutes);

//heroku 
/*
app.get('/', (req, res) =>{
  res.send('Hello to Memories API');
});
*/

//Mongodb connation. 

const PORT = process.env.PORT || 5000;


mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true });
app.listen(PORT, function () {
    console.log(`Server running on port: ${PORT}`);
  });















