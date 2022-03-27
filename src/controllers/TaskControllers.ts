import {Request, Response } from "express";
import { taskServices } from '../services/TaskServices';
import NullDataException from '../exceptions/serveExceptions';

 class TaskController {
     async create(req:Request, res:Response){
        try {
            const {user} = req.params ; 
            const result = await taskServices.Create(req.body,user);
            return res.status(201).json(result);

        } catch (error) {
            if (error == NullDataException) {
                console.log(error);
                return res.status(error.status).json({messgae:error.message});
            }
            else {
              console.log(error);
              return res.status(500).json({ message: "Internal server erro" });
            }
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

     async find(req:Request, res:Response){
        try {
            const {task} =req.params;
            const result = await taskServices.Find(task);
            return res.status(200).json(result);
        } catch (error) {   
            if (error == NullDataException) {
                console.log(error);
                return res.status(error.status).json({messgae:error.message});
            }
            else {
              console.log(error);
              return res.status(500).json({ message: "Internal server erro" });
            }
        } 
         
     }
     
     async update(req:Request, res:Response){
         try {
             const {task} =req.params;
             const {title,content} = req.body;
             const reqObjt = {
                 title,
                 content
             }
             const result = await taskServices.Update(reqObjt,task);
             return res.status(200).json(result);             
         } catch (error) {
            if (error == NullDataException) {
                console.log(error);
                return res.status(error.status).json({messgae:error.message});
            }
            else {
              console.log(error);
              return res.status(500).json({ message: "Internal server erro" });
            }
         }
     }

     async delete (req:Request, res:Response){
         try {
            const  {task} = req.params
             const result = await taskServices.Delete(task);
             return res.status(200).json({msg:"Task deleted"});
         } catch (error) {
            if (error == NullDataException) {
                console.log(error);
                return res.status(error.status).json({messgae:error.message});
            }
            else {
              console.log(error);
              return res.status(500).json({ message: "Internal server erro" });
            };
         }
     }
};



export const taskController = new TaskController();