import { loginInitialValues } from "@/types/types";

const API = process.env.NEXT_PUBLIC_API_URL;

export const signIn = async (values:loginInitialValues) => {
    const response = await fetch(`${API}/auth/login`,{
        method:"POST",
        body:JSON.stringify(values),
        headers:{"Content-Type":"application/json"},
    });
    if(!response.ok) throw new Error("error posting data");
    return response.json();
};

export const signUp = async () => {};
export const signOut = async () => {};
