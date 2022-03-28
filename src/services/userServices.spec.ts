import { PostgresDataSource } from '../database/data-source';
import { User } from '../database/entity/User';
import { userServices } from './UserServices';
import { randomUUID } from 'crypto';

const userRepository = PostgresDataSource.getRepository(User);

describe("Create user",  ()=>{
    it("should be able  to create a new user",async()=>{
        const userData : User = {
            name: "TesteName",
            tasks: [],
            id: randomUUID()
        }
        const userCreate = await userServices.Create(userData);
        expect(userCreate).toHaveProperty("id");
    });
});