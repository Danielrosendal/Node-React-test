const assert = require('assert');

class UserService {
  constructor(userAdapters) {
    assert.ok(userAdapters, 'User adapters is required.');
    this.userAdapters = userAdapters;
  }

  getUserData(userName, email) {
    const userData = [this.userAdapters.length];
    for (let i = 0; i < this.userAdapters.length; i += 1) {
      userData[i] = (this.userAdapters[i].GetUserData(userName, email));
    }
    return userData;
  }
}

module.exports = UserService;
