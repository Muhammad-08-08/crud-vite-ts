import { create } from "zustand";
import {
  BuyurtmalarType,
  GroupType,
  Mahsulotlar,
  StudentsType,
} from "../components/User.Type";
import getRandomId from "../components/RandomId";

export type StoreType = {
  students: StudentsType[];
  group: GroupType[];
  mahsulotlar: Mahsulotlar[];
  buyurtmalar: BuyurtmalarType[];
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
    mahsulotlar: [
      {
        image:
          "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
        name: "Kiwi",
        active: true,
      },
    ],
    buyurtmalar: [
      {
        product: "olma",
        student: "Muhammad",
        active: true,
        id: getRandomId(),
      },
    ],
  };
});

export default useGlobalStore;
