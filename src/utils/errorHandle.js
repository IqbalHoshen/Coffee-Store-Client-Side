export const handleResponse = async (response) => {
  if (!response) {
    throw new Error("Something went wrong on API server!");
  }
  return response.data;
};
