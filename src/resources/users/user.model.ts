import {v4 as uuid} from 'uuid';

class User {
  name: string;
  login: string;
  password: string;
  id?: string;

  constructor(name: string = 'USER', login: string = 'user', password: string = 'P@55w0rd', id: string = uuid()) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.id = id;
  }

  static toResponse(user: User): { id?: string; name: string; login: string } {
    const {id, name, login} = user;
    return {id, name, login};
  }
}

export {User};
