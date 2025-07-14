import { api } from "../../../../shared/api/axios";

export const getCategories = async (): Promise<string[]> => {
  const { data } = await api.get<string[]>("/products/categories");

  return data;
};
