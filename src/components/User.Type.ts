export type StudentsType = {
  firstName: string;
  lastName: string;
  age: number;
  gender: "male" | "female";
  active: boolean;
  id: number;
};

export type GroupType = {
  id: number;
  active: boolean;
  group: string;
};

export type Mahsulotlar = {
  image: string;
  name: string;
  active: boolean;
};

export type BuyurtmalarType = {
  product: string;
  student: string;
  active: boolean;
  id: number;
};

export type CategoriesType = {
  name: string;
  active: boolean;
  id: number;
};
