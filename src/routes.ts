import { Router } from "express";
import { userController} from "./controllers/UserController";
import { taskController } from './controllers/TaskControllers';

const routes = Router();
//User Routes
routes.post("/userstore", userController.create);
routes.get("/users",userController.list);
routes.get("/user/:user", userController.find);
routes.put("/user/:user", userController.update);
routes.delete("/user/:user" , userController.delete);

//Task Routes
routes.post("/task/:user",taskController.create);
routes.get("/tasks",taskController.list);
routes. get("/task/:task",taskController.find);
export { routes };