import axios from "axios";
import { handleResponse } from "../utils/errorHandle";

const API_URL = import.meta.env.VITE_BASE_URL;
// Get all coffee data
export const getCoffeeData = async () => {
  const response = await axios.get(`${API_URL}/get/coffee`);
  return handleResponse(response);
};

// Add new coffee
export const addCoffee = async (data) => {
  const response = await axios.post(`${API_URL}/add/coffee`, data);

  return handleResponse(response);
};

// Delete coffee by ID
export const deleteCoffee = async (id) => {
  const response = await axios.delete(`${API_URL}/delete/coffee/${id}`);

  return handleResponse(response);
};

// export const deleteCoffee = async (id) => {
//   const response = await fetch(`${API_URL}/delete/coffee/${id}`, {
//     method: "DELETE",
//   });

//   return handleResponse(response);
// };
