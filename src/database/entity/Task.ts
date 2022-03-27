import {PrimaryColumn, Column , Entity , CreateDateColumn, ManyToOne } from "typeorm";
import {v4 as uuid} from 'uuid';
import { User } from './User'
@Entity("task")
export class Task{
    @PrimaryColumn()
    id:string;

    @Column()
    title:string;

    @Column()
    content:string;
        
    @ManyToOne(() => User, (user:User) => user.tasks)
    user: User;

    @CreateDateColumn()
    created_at: Date;

    constructor(){
        if(!this.id){
            this.id = uuid();
        }};
};