import customAxios from "@/services/axios";
import { IActivateCode, IRegisterForm } from "@/interface";

export const setRegister = (data: IRegisterForm) => {
  return customAxios.post("/user/register", { ...data });
};

export const activateRegisterCode = (data: IActivateCode) => {
  return customAxios.post("/user/activate-code", { ...data });
};
