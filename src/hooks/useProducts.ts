import { Product } from "../context/cart";
import { FiltersContext } from "../context/filters";
import { useContext, useEffect, useState } from "react";
import { useFilters } from "./useFilters";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const { filterProducts } = useFilters();
  const { filters, setFilters } = useContext(FiltersContext);
  const filteredProducts = filterProducts(products);

  const getProductsList = async () => {
    try {
      await fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((data) => setProducts(data));
    } catch (error) {
      throw new Error(`Hubo un error al realizar la petición ${error}`);
    }
  };

  const getProductById = async (id: unknown) => {
    try {
      await fetch(`https://fakestoreapi.com/products/${id}`)
        .then((response) => response.json())
        .then((data) => {
          setProduct(data);
        });
    } catch (error) {
      throw new Error(
        `hubo un error al realizar la peticion del producto ${error}`
      );
    }
  };

  useEffect(() => {
    getProductsList();
  }, []);

  const handleProductPrice = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      price: Number(event.currentTarget.value),
      category: filters.category,
      title: filters.title,
    });
  };

  const handleProductCategory = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setFilters({
      price: filters.price,
      category: event.currentTarget.value,
      title: filters.title,
    });
  };

  const searchProductByName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({
      price: filters.price,
      category: filters.category,
      title: event.currentTarget.value,
    });
  };

  return {
    filteredProducts,
    handleProductPrice,
    handleProductCategory,
    searchProductByName,
    filters,
    products,
    product,
    getProductById,
  };
};
