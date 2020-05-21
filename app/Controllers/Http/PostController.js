"use strict";

class PostController {
  async store({ auth, request, response }) {
    return "Saved post";
  }
  async update({ auth, request, response }) {
    return request.post();
  }
  async destroy({ auth, request, response }) {
    return "destroyed";
  }
}

module.exports = PostController;
