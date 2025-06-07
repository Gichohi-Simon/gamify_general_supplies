
export interface userState {
    id?:number;
    email:string;
    password:string
}

export interface tokenState {
    token:string;
}

export interface initialFormValuesInterface {
  email: string;
  username: string;
  password: string;
  confirmPassword: string;
}

export interface loginInitialValues {
    email:string;
    password:string;
}