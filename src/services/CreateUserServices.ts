import {PostgresDataSource} from '../database/data-source';
import { User } from '../database/entity/User';

interface IUserRequest {
    name:string;
};

export class CreateUserService{
    async execute({name}:IUserRequest):Promise<User | Error>{
        const repo = PostgresDataSource.getRepository(User);
        
        if(await repo.findOneBy({name:name})){
            return new Error ("The user already exist");
        }

        const user = await repo.create({
            name
        });
        
        await repo.save(user);
        return user;
    }
};