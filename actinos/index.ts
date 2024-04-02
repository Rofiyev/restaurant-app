import customAxios from "@/services/axios";
import {
  IActivateCode,
  ILoginForm,
  IMyRestaurant,
  IRegisterForm,
  IResetPassword,
  IRestaurantList,
  ISearchParams,
} from "@/interface";

export const setRegister = (data: IRegisterForm) => {
  return customAxios.post("/user/register", {
    ...data,
    phone: "+998",
  });
};

export const activateRegisterCode = (data: IActivateCode) => {
  return customAxios.post("/user/activate-code", data);
};

export const setLogin = (data: ILoginForm) => {
  return customAxios.post("/user/login", data);
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

export const getRegions = () => {
  return customAxios.get("/region");
};

export const getDistricts = (region_id: number) => {
  return customAxios.get("/district", { params: { region_id } });
};

export const getMyBooking = (): Promise<{ data: IMyRestaurant[] }> => {
  return customAxios.get("/restaurant/my");
};

export const getAllRestaurant = ({
  page,
  page_size,
}: {
  page: number;
  page_size: number;
}): Promise<{ data: IRestaurantList }> => {
  return customAxios.get("/restaurant/list", { params: { page, page_size } });
};

export const getSearchData = ({
  district_id,
  region_id,
}: ISearchParams): Promise<{
  data: IRestaurantList;
}> => {
  return customAxios.get("/restaurant/list", {
    params: { district_id, region_id },
  });
};

export const changeUserData = (formData: FormData) => {
  return customAxios.put("/user/", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
