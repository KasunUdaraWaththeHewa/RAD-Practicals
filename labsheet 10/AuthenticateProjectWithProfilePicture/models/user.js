const users = [];

class User {
  constructor(id, username, password, profilePicturePath) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.profilePicturePath = profilePicturePath;
  }
}

users.push(new User(1, 'user1', 'password1', null));

module.exports = {
  findById: (id) => users.find(user => user.id === id),
  findByUsername: (username) => users.find(user => user.username === username),
  addUser: (user) => users.push(user)
};
