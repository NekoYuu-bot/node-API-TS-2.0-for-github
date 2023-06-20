import express from 'express';

import { createUser, getUserByEmail } from '../db/users';

export const adduser = async (req: express.Request, res: express.Response) => {
    try {
        const {username, email, phonenumber} =req.body;

        if(!username || !email || !phonenumber){
        return res.sendStatus(400); 
        }

        const existingUser = await getUserByEmail(email);
        if(existingUser){
          return res.sendStatus(400);
        }

        const user = await createUser({
            email,
            username,
            phonenumber
        });

        return res.status(200).json(user).end();
    } catch (error) {
      console.log(error);
      return res.sendStatus(400);
    }
}