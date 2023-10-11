export interface UserData {
  _id: string;
  name: string;
  age: string;
  role: string;
}

export interface UpdateUser {
  name?: string;
  age?: string;
  role?: string;
}

export interface InsertUser {
  id?: string;
  name: string;
  age: string;
  role: string;
}
