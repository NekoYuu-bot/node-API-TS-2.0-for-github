import express from 'express';

import { adduser } from '../controllers/adduser';

export default (router: express.Router) =>{
    router.post('/adduser',adduser);
};