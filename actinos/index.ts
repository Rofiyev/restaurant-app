import customAxios from "@/services/axios";
import {
  IActivateCode,
  ILoginForm,
  IRegisterForm,
  IResetPassword,
} from "@/interface";

export const setRegister = (data: IRegisterForm) => {
  return customAxios.post("/user/register", {
    ...data,
    phone: "",
  });
};

export const activateRegisterCode = (data: IActivateCode) => {
  return customAxios.post("/user/activate-code", {
    ...data,
  });
};

export const setLogin = (data: ILoginForm) => {
  return customAxios.post("/user/login", {
    ...data,
  });
};

export const getUser = () => {
  return customAxios.get("/user/");
};

export const resetEmail = (email: string) => {
  return customAxios.post("/user/reset-password", { email });
};

export const confirmPassword = (data: IResetPassword) => {
  return customAxios.post("/user/reset-password-confirm", { ...data });
};
