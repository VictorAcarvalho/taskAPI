import {Column,Entity,OneToMany,PrimaryColumn} from 'typeorm'
import { v4 as uuid } from "uuid"
import { Task } from './Task';
@Entity("users")
export class User{
    @PrimaryColumn()
    id:string;

    @Column()
    name:string;

    @OneToMany(()=>Task,(task:Task)=>task.user)
     tasks: Task[]; 
       
    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
};

