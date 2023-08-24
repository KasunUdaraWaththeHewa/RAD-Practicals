const users = [];

class User {
  constructor(id, username, password) {
    this.id = id;
    this.username = username;
    this.password = password;
  }
}

users.push(new User(1, 'user1', 'password1'));

module.exports = {
  findById: (id) => users.find(user => user.id === id),
  findByUsername: (username) => users.find(user => user.username === username)
};
