
export interface userState {
    id?:number;
    email:string;
    password:string;
}

export interface tokenState {
    token:string;
}

export interface userIdinterface {
    userId:number
}

export interface initialFormValuesInterface {
  email: string;
  username: string;
  password: string;
  confirmPassword?: string;
}

export interface loginInitialValues {
    email:string;
    password:string;
}

export interface userInterface {
    id:number;
    username:string;
    email:string;
    password:string;
    isAdmin:boolean;
    isActive:boolean;
    createdAt:string;
}

export interface postsInterface {
    id?:number;
    name:string;
    price:number;
    image:string;
    createdAt?:string;
    cloudinary_id?:string;
}

export interface AuthState {
    userInfo: userState | null;
    userId: userIdinterface | null;
    token: string | null
}