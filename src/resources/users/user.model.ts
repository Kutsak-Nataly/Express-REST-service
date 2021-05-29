import {v4 as uuid} from 'uuid';

/**
 * Class representing User
 */
class User {

  /**
   * Create a User
   * @param id {string} - Unique identification number in the database of User
   * @param name {string} - Username
   * @param login {string} - Login of User
   * @param password {string} - Secret access code to the application
   */
  name: string ;
  login: string;
  password: string;
  id?: string;

  constructor(name: string = 'USER', login: string = 'user', password: string = 'P@55w0rd', id: string = uuid()) {
    this.name = name;
    this.login = login;
    this.password = password;
    this.id = id;
  }

  /**
   * Removes the parameter 'password' in order to protect the application from hacking by intruders
   * @param user {User} - Instance class User
   * @returns {{name: *, id: *, login: *}} - Object User without password
   */
  static toResponse(user: User) {
    const {id, name, login} = user;
    return {id, name, login};
  }
}

export {User};
