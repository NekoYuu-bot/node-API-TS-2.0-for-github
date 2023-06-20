import express from "express";
import users from "./users";
import adduser from './adduser';

const router = express.Router();

export default(): express.Router =>{
    adduser(router);
    users(router);
    return router;
};