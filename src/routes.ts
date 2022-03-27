import { Router } from "express";
import { userController} from "./controllers/UserController";
import { taskController } from './controllers/TaskControllers';

const routes = Router();
//User Routes
routes.post("/userstore", userController.create);
routes.get("/users",userController.list);
routes.get("/user/:user", userController.findUniqueUser);


routes.post("/task/:user",taskController.create);

export { routes };