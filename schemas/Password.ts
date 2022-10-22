import * as yup from "yup";

export const PasswordSchema = yup.object().shape({
  url: yup.string().required("You must add the URL"),
  name: yup.string().required("You must add the Name for this card"),
  username: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("You must add your username"),
  password: yup
    .string()
    .min(6, "Minimum 6 characters")
    .required("You must create a password"),
});
