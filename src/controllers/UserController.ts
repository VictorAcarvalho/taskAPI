import { Request, Response } from "express";
import UserAlreadyExistException from "../exceptions/userExceptions";
import { userServices } from "../services/UserServices";
import NullDataException from '../exceptions/serveExceptions';

class UserController {
  async create(req: Request, res: Response) {
    try {
      const result = await userServices.Create(req.body);
      return res.status(201).json(result);
    } catch (error) {
      if (error == UserAlreadyExistException) {
        console.log(error);
        return res.status(error.status).json({ message: error.message });
      }
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

  async list(req: Request, res: Response) {
    try {
      const result = await userServices.List();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server erro" });
    }
  }

  async find(req:Request,res:Response){
    try {
      const {user} = req.params;
      console.log(user);
      const result = await userServices.Find(user);
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

  async update(req:Request,res:Response){
    try {
      const {user} =  req.params;
      const {name} = req.body;
      const result = await userServices.Update(user,name);
      return res.status(200).json(result)
      
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

  async delete(req:Request,res:Response){
    try {
      const {user} = req.params;
      const result = await userServices.Delete(user);
      return res.status(201).json({message:`User deleted`});
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
}

export const userController = new UserController();
