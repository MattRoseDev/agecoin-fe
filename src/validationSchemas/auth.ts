import * as Yup from "yup";

export const loginValidationSchema = Yup.object().shape({
  username: Yup.string()
    .min(5, "username is too short!")
    .required("We cannot identify you without a username :)"),
  password: Yup.string()
    .min(5, "Good, but your password is too short!")
    .required("Sorry, But we need your password :(")
});
