import {Request, response, Response} from 'express'; 
import { CreateUserService } from '../services/CreateUserServices';

export class UserController{
    async handle(req:Request, res:Response){
        const {name} = req.body;
        const service = new CreateUserService();
        const result = await service.execute({name});

        if(result instanceof Error){
            return response.status(401).json(result.message);
        }
        return response.status(201).json(result);
    };
};