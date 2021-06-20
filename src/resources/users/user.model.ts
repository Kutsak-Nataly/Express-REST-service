import {v4 as uuid} from 'uuid';
import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

type UserPublic = Omit<User, 'password'>;

@Entity()
class User {
  @Column()
  name: string;
  @Column()
  login: string;
  @Column()
  password: string;
  @PrimaryGeneratedColumn('uuid')
  id?: string;

  constructor(name: string = 'USER', login: string = 'user', password: string = 'P@55w0rd', id: string = uuid()) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.id = id;
  }

  static toResponse(user: User): UserPublic {
    const {id, name, login} = user;
    return {id, name, login};
  }
}

export {User};
