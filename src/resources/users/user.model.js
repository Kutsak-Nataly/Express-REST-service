const uuid = require('uuid');
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
  constructor({
    id = uuid.v4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd'
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Removes the parameter 'password' in order to protect the application from hacking by intruders
   * @param user {User} - Instance class User
   * @returns {{name: *, id: *, login: *}} - Object User without password
   */
  static toResponse(user) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
