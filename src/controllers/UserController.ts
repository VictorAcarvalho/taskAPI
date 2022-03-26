import { Request, Response } from "express";
import { User } from "../database/entity/User";
import  UserAlreadyExistException  from "../exceptions/userExceptions";
import { userServices } from "../services/CreateUserServices";

export class UserController {
  async handle(req: Request, res: Response) {
    try {
      const result = await userServices.CreateUser(req.body);
      return res.status(201).json(result);
    } catch (error) {
      if (error == UserAlreadyExistException) {
        console.log(error)
        return res.status(error.status).json({ message: error.message });
      } else {
          console.log(error)
        return res.status(500).json({ message: "Internal server erro" });
      }
    }
  }
}
