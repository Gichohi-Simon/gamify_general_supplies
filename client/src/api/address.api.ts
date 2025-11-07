import { Address } from "@/types/types";
const API = process.env.NEXT_PUBLIC_API_URL;

export const getLoggedInUserAddress = async() => {
    const response = await fetch(`${API}/address/get-logged-in-user-address`,{
        credentials:"include",
    })

    if(!response.ok) throw new Error("failed to get logged in user data")
    return response.json();
}

export const createDeliveryAddress = async(values:Address) => {
  const response = await fetch(`${API}/address/create-address`,{
    method:"POST",
    credentials:"include",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify(values)
  })
  if(!response.ok) throw new Error("failed to create post");
  return response.json();
}

export const updateDeliveryAddress = async(values:Address) => {
    const response = await fetch(`${API}/address/update-address`,{
        method:"PATCH",
        credentials:"include",
        headers:{"Content-Type":"application/json"},
        body:JSON.stringify(values)
    })
    if(!response.ok) throw new Error("failed to update post");
    return response.json();
}

export const deleteDeliverAddress = async() => {
    const response = await fetch(`${API}/address/delete-address`,{
        method:"DELETE",
        credentials:"include",
    })
    if(!response.ok) throw new Error("failed to delete address");
    return response.json()
}