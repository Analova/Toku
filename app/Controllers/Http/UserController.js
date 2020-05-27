"use strict";
const User = use("App/Models/User");

class UserController {
  async profile({ auth, request, resposne }) {
    try {
      const user = await User.query()
        .where("id", "=", request.params.id)
        .fetch();
      console.log(user.toJSON());
      return user.toJSON();
    } catch (error) {
      console.log(error);
    }
  }
  async follow({ auth, request, resposne }) {
    try {
      const user = await User.query()
        .where("id", "=", request.params.id)
        .fetch();
      console.log(user.toJSON());
      return user.toJSON();
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
