import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity({ name: 'todos'})
export class Todo {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    titulo:string;

}
