import axios from "axios";
import { ProductDto } from "../types/product.type";

export const useProducts = () => {

  const str = process.env.REACT_APP_BASE_URL + "/product";

  async function getAllProducts() : Promise<ProductDto[] | undefined> {
    try {
      const result = await axios.get(str);
      return result.data as unknown as ProductDto[];
      
    } catch (error) {
      console.error(error);
    }
  }

  async function getOneProductById(id: string) : Promise<ProductDto | undefined> {
    try {
      const result = await axios.get(str + "/" + id);
      return result.data as unknown as ProductDto;
      
    } catch (error) {
      console.error(error);
    }
  }

  return { getAllProducts, getOneProductById };
}