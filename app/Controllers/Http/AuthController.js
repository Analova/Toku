"use strict";

const { validate } = use("Validator");
const Hash = use("Hash");
const User = use("App/Models/User");

class AuthController {
  async register({ response, request, view }) {
    return view.render("auth/register");
  }

  async storeUser({ request, session, response, auth }) {
    // Validations rules
    const validation = await validate(request.all(), {
      email: "required|email|unique:users,email",
      password: "required",
      confirm_password: "required",
    });

    //Check if password match
    if (request.input("password") == request.input("confirm_password")) {
      // Check if it fails validation
      if (validation.fails()) {
        // session.withErrors(validation.messages()).flashExcept(["password"]);

        // return response.redirect("back");

        return `Error there is a problem with the email `;
      } else {
        try {
          let newUser = await User.create({
            email: request.input("email"),
            password: request.input("password"),
          });
        } catch (error) {
          console.log(error);
          return "problems with database";
        }
      }

      return `Validation passed`;
    } else {
      return `passwords dont match`;
    }
  }

  async login({ response, request, view }) {
    return view.render("auth/login");
  }
  async forgotPassword({ response, request, view }) {
    return view.render("auth/forgotPassword");
  }
}

module.exports = AuthController;
