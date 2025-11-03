export interface User {
  username: string;
  email: string;
  avatar: string;
}

export interface UserData {
  email?: string;
  username: string;
}

export interface UserRegisterData {
  email: string;
  password: string;
}