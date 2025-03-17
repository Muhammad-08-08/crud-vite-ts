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
