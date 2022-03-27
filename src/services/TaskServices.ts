import { PostgresDataSource } from "../database/data-source";
import { Task } from '../database/entity/Task';
import { User } from "../database/entity/User";

interface Itask{
  content:string;
  title: string;
  user: object
}


const userRepository = PostgresDataSource.getRepository(User);
const taskRepository =  PostgresDataSource.getRepository(Task);
class TaskServices {
  
  Create = async (task, userId:string) => {
    const user= await userRepository.findOneBy({id:userId});
     const taskObject:Itask={
        content:task.content,
        title:task.title,
        user
     };
    const taskCreated = await taskRepository.create(taskObject);
    const taskSaved = await taskRepository.save(taskCreated);
    return taskSaved;
  };

  List = async () => {
    return await taskRepository.find({
      relations:{
        user:true
      }
    });
  }
}

export const taskServices = new TaskServices();
