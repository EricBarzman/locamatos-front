import axios from "axios";
import { SubCategoriesDto } from "../types/categories.type";

export const useSubCategories = () => {

  const str = process.env.REACT_APP_BASE_URL + "/subcategory/";

  async function getAllSubCategories() : Promise<SubCategoriesDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as SubCategoriesDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneSubCategoryById(id: string) : Promise<SubCategoriesDto | undefined> {
    try {
      const result = await axios.get(str + id);
      return result.data as unknown as SubCategoriesDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllSubCategories, getOneSubCategoryById };
}