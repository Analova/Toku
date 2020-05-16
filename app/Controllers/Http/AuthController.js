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
      password: "required|min:5|max:40",
      confirm_password: "required",
    });

    //Check if password match
    if (request.input("password") == request.input("confirm_password")) {
      // Check if it fails validation
      if (validation.fails()) {
        session.withErrors(validation.messages()).flashExcept(["password"]);

        return response.redirect("back");
      } else {
        //save user to database
        try {
          let newUser = await User.create({
            email: request.input("email"),
            password: request.input("password"),
          });
        } catch (error) {
          console.log(error);
          session.withErrors([
            { field: "database", message: "problem with database, try later" },
          ]);

          return response.redirect("back");
        }
        session.flash({ notification: "Welcome to Toku" });
        return response.redirect("/home");
      }
    } else {
      //show errors if password do not match
      session.withErrors([
        { field: "password", message: "need to confirm password" },
        { field: "confirm_password", message: "need to confirm password" },
      ]);

      return response.redirect("back");
    }
  }

  async login({ response, request, view }) {
    return view.render("auth/login");
  }

  async loginUser({ response, request, view, auth, session }) {
    // capture the data from the form
    const postData = request.post();

    // find the user in the database by their Email
    const user = await User.query().where("email", postData.email).first();
    if (user) {
      const passwordVerified = await Hash.verify(
        postData.password,
        user.password
      );

      if (passwordVerified) {
        await auth.login(user);
        session.flash({ notification: "Welcome to Toku" });
        return response.redirect("/home");
      } else {
        // password incorrect
        session.withErrors([
          {
            field: "password",
            message: "incorrect password",
          },
        ]);

        return response.redirect("back");
      }
    } else {
      //can not find user with that email
      session.withErrors([
        {
          field: "email",
          message: "Can not find user with that email",
        },
      ]);

      return response.redirect("back");
    }
  }
  async forgotPassword({ response, request, view }) {
    return view.render("auth/forgotPassword");
  }
  async logout({ response, request, view, auth }) {
    try {
      await auth.logout();
      return response.redirect("/");
    } catch (error) {
      console.log(error);
      return "Error can not log out";
    }
  }
}

module.exports = AuthController;
