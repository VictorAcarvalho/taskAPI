import { Router } from "express";
import { userController} from "./controllers/UserController";
import { taskController } from './controllers/TaskControllers';

const routes = Router();

routes.post("/user", userController.create); 
routes.post("/task/:user",taskController.create);

export { routes };