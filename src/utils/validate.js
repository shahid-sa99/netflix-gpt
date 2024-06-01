import _ from "lodash";

export const validateLoginData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!_.isNull(name)) {
    // const isUsernameValid =
    //   /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/.test(name);
    if (_.isEmpty(name) || name.length < 4) return "User name is not valid";
  }

  if (!isEmailValid) return "Email Id is not valid";

  if (!isPasswordValid) return "Password is not valid";
};
