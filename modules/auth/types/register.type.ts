export type IRegister = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export type IRegisterResponse = {
  message: string;
  user: {
    id: string;
    name: string;
    email: string;
  };
  token: string;
};
