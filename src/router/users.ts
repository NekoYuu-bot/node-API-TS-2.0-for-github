import express from 'express';
import { deleteUser, getAllUsers, updateUser } from '../controllers/users';

export default (router: express.Router) =>{
    router.get('/', getAllUsers);
    router.get('/users', getAllUsers);
    router.delete('/users/:id', deleteUser);
    router.patch('/users/:id', updateUser);
    router.get('**', getAllUsers);
}