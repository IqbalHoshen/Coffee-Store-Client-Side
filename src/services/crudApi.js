import { handleResponse } from "../utils/errorHandle";

const API_URL = import.meta.env.VITE_BASE_URL;

export const addCoffee = async (data) => {
  const response = await fetch(`${API_URL}/add/coffee`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  return handleResponse(response);
};
export const getCoffeeData = async () => {
  const response = await fetch(`${API_URL}/get/coffee`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  return handleResponse(response);
};
