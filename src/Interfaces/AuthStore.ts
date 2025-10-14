import { User } from "lucide-react";

export interface UserLogin {
  username : string;
  password : string;
}

export interface User {
  username : string;
  password : string;
  role : string;
  email : string;
}

export interface AuthStore {
  logged : boolean;
  user : User | null ;
  login: () => void;
  logout: () => void;
  setUser : (newUser : User) => void;
}