"use strict";
const Post = use("App/Models/Post");

class PostController {
  async store({ auth, request, response }) {
    const newPost = await Post.create({
      content: request.input("content"),
      user_id: auth.user.id,
      type: "text",
    });
    //console.log(auth.user);
    return "item was saved";
  }
  async update({ auth, request, response }) {
    return request.post();
  }
  async destroy({ auth, request, response }) {
    return "destroyed";
  }
}

module.exports = PostController;
