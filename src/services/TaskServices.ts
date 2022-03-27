import { PostgresDataSource } from "../database/data-source";
import { Task } from "../database/entity/Task";
import { User } from "../database/entity/User";
import NullDataException from '../exceptions/serveExceptions';
interface Itask {
  content: string;
  title: string;
  user: object;
}

const userRepository = PostgresDataSource.getRepository(User);
const taskRepository = PostgresDataSource.getRepository(Task);
class TaskServices {
  Create = async (task, userId: string) => {
    if (userId == null || task == null) {
      throw new NullDataException(
        "There are parameters that were not declared correctly"
      );
    }
    
    const user = await userRepository.findOneBy({ id: userId });
    const taskObject: Itask = {
      content: task.content,
      title: task.title,
      user,
    };
    const taskCreated = await taskRepository.create(taskObject);
    const taskSaved = await taskRepository.save(taskCreated);
    return taskSaved;
  };

  List = async () => {
    return await taskRepository.find({
      relations: {
        user: true,
      },
    });
  };

  Find = async (taskId: string) => {
    if (taskId == null) {
      throw new NullDataException(
        "There are parameters that were not declared correctly"
      );
    }
    const task = await taskRepository.find({
      where: { id: taskId },
      relations: {
        user: true,
      },
    });
    return task;
  };

  Update =async (content, taskId:string) => {
    if (taskId == null || content == null) {
      throw new NullDataException(
        "There are parameters that were not declared correctly"
      );
    }
      const task = await taskRepository.findOneBy({id:taskId});
      const ObjTask ={
        title: content.title,
        content:content.content 
      }
      const merge = taskRepository.merge(task,ObjTask);
      const result = taskRepository.save(merge)
      return result;
  }

  Delete =async(taskId) =>{
    if (taskId == null) {
      throw new NullDataException(
        "There are parameters that were not declared correctly"
      );
    }
    const result = await taskRepository.delete(taskId);
    return result;
  }
}

export const taskServices = new TaskServices();
