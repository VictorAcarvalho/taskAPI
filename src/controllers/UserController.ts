import { Request, Response } from "express";
import UserAlreadyExistException from "../exceptions/userExceptions";
import { userServices } from "../services/UserServices";

class UserController {
  async create(req: Request, res: Response) {
    try {
      const result = await userServices.CreateUser(req.body);
      return res.status(201).json(result);
    } catch (error) {
      if (error == UserAlreadyExistException) {
        console.log(error);
        return res.status(error.status).json({ message: error.message });
      } else {
        console.log(error);
        return res.status(500).json({ message: "Internal server erro" });
      }
    }
  }

  async list(req: Request, res: Response) {
    try {
      const result = await userServices.ListAllUsers();
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Internal server erro" });
    }
  }

  async findUniqueUser(req:Request,res:Response){
    try {
      const {user} = req.params;
      console.log(user);
      const result = await userServices.FindUser(user);
      return res.status(200).json(result);
    } catch (error) {
      console.log(error);
      return res.status(500).json({message:"Internal server erro"});
    }

  }
}

export const userController = new UserController();
