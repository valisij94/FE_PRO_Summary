export class UsersApi {
  static #currentId = 20;
  static #usersList = [
    {
      "userId" : 10,
      "userName" : "Иван Купитман",
      "email" : "kin@gmail.com",
      "passwd" : "1234567890",
      "login" : "KupitMan"
    },
    {
      "userId" : 11,
      "userName" : "Андрей Быков",
      "email" : "bae@gmail.com",
      "passwd" : "qweasdzxc",
      "login" : "Yascher"
    },
    {
      "userId" : 12,
      "userName" : "Анастасия Кисегач",
      "email" : "kan@gmail.com",
      "passwd" : "qazwsxedc",
      "login" : "Belka"
    }
  ];

  static addUser(login, pwd, name, email) {
    return new Promise( (resolve, reject) => {
      const newUser = {
        userId: ++this.#currentId,
        userName: name,
        email,
        passwd: pwd,
        login
      };
      this.#usersList.push(newUser);
      resolve( { success: true, userId: this.#currentId } );
    });
  };

  static removeUser(userId) {
    return new Promise( (resolve, reject) => {
      this.#usersList = this.#usersList.filter( user => user.userId !== userId);
      resolve( { success: true } );
    });
  }

  static getUsers() {
    return new Promise( (resolve, reject) => {
      resolve( this.#usersList );
    });
  }
}
