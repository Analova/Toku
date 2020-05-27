"use strict";
const Database = use("Database");
const User = use("App/Models/User");

class UserController {
  async profile({ auth, request, resposne }) {
    try {
      const user = await User.query()
        .where("id", "=", request.params.id)
        .fetch();
      const following = await Database.from("followers").where({
        user_id: 1,
        follow_id: request.params.id,
      });
      console.log("================");
      console.log(following);
      console.log("================");

      return {
        user: user.toJSON(),
        following:
          following === undefined || following.length == 0 ? false : true,
      };
    } catch (error) {
      console.log(error);
    }
  }
  async follow({ auth, request, resposne }) {
    try {
      const followedUser = await Database.table("followers").insert({
        user_id: 1,
        follow_id: request.params.id,
      });
      console.log(followedUser);
      return "saved successfully";
    } catch (error) {
      console.log(error);
    }
  }
  async unfollow({ auth, request, resposne }) {
    try {
      const followedUser = await Database.table("followers")
        .insert({
          user_id: 1,
          follow_id: request.params.id,
        })
        .delete();

      console.log(followedUser);
      return "Deleted successfully";
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = UserController;
