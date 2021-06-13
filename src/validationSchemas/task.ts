import * as Yup from "yup";

export const addTaskValidationSchema = Yup.object().shape({
  title: Yup.string()
    .min(1)
    .required(),
  defaultCoins: Yup.number()
    .min(5)
    .required(),
  description: Yup.string().min(0)
});

export const editTaskValidationSchema = Yup.object().shape({
  id: Yup.string().required(),
  title: Yup.string()
    .min(1)
    .required(),
  defaultCoins: Yup.number()
    .min(5)
    .required(),
  description: Yup.string().min(0)
});
