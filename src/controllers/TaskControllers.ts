import {Request, Response } from "express";
import { taskServices } from '../services/TaskServices';


 class TaskController {
     async create(req:Request, res:Response){
        try {
            const {user} = req.params ; 
            const result = await taskServices.CreateTask(req.body,user);
            return res.status(201).json(result);

        } catch (error) {
            return res.status(500).json({message:"Internal erro in task creation"});
        }
        
     }
};

export const taskController = new TaskController();