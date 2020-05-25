"use strict";
const User = use("App/Models/User");

class UserController {
  async profile({ auth, request, resposne }) {
    try {
      const user = await User.query().where("id", "=", 1).fetch();
      console.log(user.toJSON());
      return user.toJSON();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
