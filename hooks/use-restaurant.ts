import { IRestaurant } from "@/interface";
import { create } from "zustand";

type TUseRestaurant = {
  loading: boolean;
  restaurants: IRestaurant[] | null;
  setRestaurants: (data: IRestaurant[]) => void;
  startLoading: () => void;
  stopLoading: () => void;
};

export const useRestaurant = create<TUseRestaurant>((set) => ({
  loading: true,
  restaurants: null,
  setRestaurants: (data: IRestaurant[]) => set({ restaurants: data }),
  startLoading: () => set({ loading: true }),
  stopLoading: () => set({ loading: false }),
}));
