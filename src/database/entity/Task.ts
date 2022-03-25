import {PrimaryColumn, Column , Entity , CreateDateColumn, ManyToOne, JoinColumn } from "typeorm";
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
    
    @Column()
    user_id:string

    @Column()
    user_name:string

    @ManyToOne(()=> User)
    @JoinColumn({name:"user_id"})
    user: User;

    @ManyToOne(()=>User)
    @JoinColumn({name:"user_name"})
    userName : User;

    @CreateDateColumn()
    crated_at: Date;

};