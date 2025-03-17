import { create } from "zustand";
import { StudentsType } from "../components/User.Type";
import getRandomId from "../components/RandomId";

export type StoreType = {
  students: StudentsType[];
  group?: any[];
};

const useGlobalStore = create<StoreType>(() => {
  return {
    students: [
      {
        id: getRandomId(),
        active: true,
        age: 16,
        firstName: "Anvar",
        gender: "male",
        lastName: "Aliyev",
      },
    ],
  };
});

export default useGlobalStore;
