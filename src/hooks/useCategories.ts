import axios from "axios";
import { CategoriesDto } from "../types/categories.type";

export const useCategories = () => {

  const str = process.env.NEXT_PUBLIC_SERVER_URL as string + "category";
  console.log(str)

  async function getAllCategories() : Promise<CategoriesDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as CategoriesDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneCategoryById(id: string) : Promise<CategoriesDto | undefined> {
    try {
      const result = await axios.get(str + "/" + id);
      return result.data as unknown as CategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllCategories, getOneCategoryById };
}