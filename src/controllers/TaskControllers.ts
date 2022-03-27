import {Request, Response } from "express";
import { taskServices } from '../services/TaskServices';


 class TaskController {
     async create(req:Request, res:Response){
        try {
            const {user} = req.params ; 
            const result = await taskServices.Create(req.body,user);
            return res.status(201).json(result);

        } catch (error) {
            return res.status(500).json({message:"Internal erro in task creation"});
        }
        
     }

     async list(req:Request , res:Response){
         try {
             const result= await taskServices.List()
             return res.status(200).json(result);
             
         } catch (error) {
            console.log(error)
            return res.json({message:"Internal server error"});     
         }
     }
};



export const taskController = new TaskController();