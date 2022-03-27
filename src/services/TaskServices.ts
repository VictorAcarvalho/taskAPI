import { PostgresDataSource } from "../database/data-source";
import { Task } from '../database/entity/Task';
import { User } from "../database/entity/User";

interface Itask{
  content:string;
  title: string;
  user: object
}


const userRepository = PostgresDataSource.getRepository(User);
class TaskServices {
  
  CreateTask = async (task, userName:string) => {
    const taskRepository =  PostgresDataSource.getRepository(Task);
    const user= await userRepository.findOneBy({name:userName});
     const taskObject:Itask={
        content:task,
        title:task,
        user
     };
    const taskCreated = await taskRepository.create(taskObject);
    const taskSaved = await taskRepository.save(taskCreated);
    return taskSaved;
  };
}

export const taskServices = new TaskServices();
