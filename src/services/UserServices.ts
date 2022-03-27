import { PostgresDataSource } from "../database/data-source";
import UserAlreadyExistException from "../exceptions/userExceptions";
import { User } from "../database/entity/User";

const userRepository = PostgresDataSource.getRepository(User);

class UserServices {
  
  CreateUser = async (user: User) => {
    
    if (
      await userRepository.findOneBy({
        name: user.name,
      })
    ) {
      throw new UserAlreadyExistException("User already exists");
    }
    const userCreated = await userRepository.create(user)
    const userSaved = await userRepository.save(userCreated);
    return userSaved;
  };

  ListAllUsers = async () => {
     const users = await userRepository.find();
     return users;
  }
}

export const userServices = new UserServices();
