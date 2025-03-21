import { create } from "zustand";
import {
  BuyurtmalarType,
  CategoriesType,
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
  categories: CategoriesType[];
};

const useGlobalStore = create<StoreType>(() => {
  const groupId = getRandomId();

  const mahsulotlar: Mahsulotlar[] = [
    {
      image: "https://cdn.britannica.com/45/126445-050-4C0FA9F6/Kiwi-fruit.jpg",
      name: "Kiwi",
      active: true,
      price: 10000,
      id: groupId,
    },
  ];

  const buyurtmalar: BuyurtmalarType[] = [
    {
      product: "Kiwi",
      student: "Muhammad",
      active: true,
      quantity: 12,
      price: 12 * (mahsulotlar.find((m) => m.name === "Kiwi")?.price || 0),
      id: getRandomId(),
    },
  ];

  return {
    students: [
      {
        id: getRandomId(),
        active: true,
        age: 16,
        firstName: "Anvar",
        gender: "male",
        lastName: "Aliyev",
        guruh: groupId,
      },
    ],
    group: [
      {
        id: groupId,
        active: true,
        group: "N12",
      },
    ],
    mahsulotlar,
    buyurtmalar,
    categories: [
      {
        name: "telefonlar",
        active: true,
        id: getRandomId(),
      },
    ],
  };
});

export default useGlobalStore;
