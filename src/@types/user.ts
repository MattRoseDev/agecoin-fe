export type User = {
  id: string;
  fullname: string;
  username: string;
  role: "ADMIN" | "USER";
  birthday: string;
  maxAge: number;
};
