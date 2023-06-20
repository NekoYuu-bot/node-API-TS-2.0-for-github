import express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router'

const app = express();

const port : number = 8080;

app.use(cors({
    credentials : true,
}));

app.use(bodyParser.json());

const server = http.createServer(app);

server.listen(port, ()=> {
    console.log(`Server is running on port: ${port}`)
})

//use your own uri
const uri = "";


mongoose.connect(uri)
.then(()=> console.log("Connected to mongodb"));
mongoose.connection.on('error', (error : Error) => console.log("Connection to the database faile",error));

app.use('/', router());
