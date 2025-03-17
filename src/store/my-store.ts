import { create } from "zustand";
import { GroupType, StudentsType } from "../components/User.Type";
import getRandomId from "../components/RandomId";

export type StoreType = {
  students: StudentsType[];
  group: GroupType[];
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
    group: [
      {
        id: getRandomId(),
        active: true,
        group: "N12",
      },
    ],
  };
});

export default useGlobalStore;
