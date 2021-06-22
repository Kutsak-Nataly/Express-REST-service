/* eslint-disable import/no-cycle */
import {v4 as uuid} from 'uuid';
import {Column, Entity, OneToMany, PrimaryGeneratedColumn} from 'typeorm';
import {Task} from '../task/task.model';

type UserPublic = Omit<User, 'password'>;

@Entity({ name: 'user' })
class User {
  @Column({default: 'USER'})
  name: string;
  @Column({default: 'user'})
  login: string;
  @Column({default: 'P@55w0rd'})
  password: string;
  @OneToMany(() => Task, task => task.user, {cascade: ['remove'] })
  tasks?: Task[];
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  constructor(name: string = 'USER', login: string = 'user', password: string = 'P@55w0rd', tasks: Task[], id: string = uuid()) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.tasks = tasks;
    this.id = id;
  }

  static toResponse(user: User): UserPublic {
    const {id, name, login} = user;
    return {id, name, login};
  }
}

export {User};
