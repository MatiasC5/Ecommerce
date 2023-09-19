import { ReactElement, ReactNode, createContext, useState } from "react";

interface Props {
  children: ReactNode;
}

interface Filters {
  price: number;
  category: string;
  title: string;
}

interface FiltersContextValue {
  filters: Filters;
  setFilters: (filters: Filters) => void;
}

export const FiltersContext = createContext<FiltersContextValue>({
  filters: {
    price: 0,
    category: "all",
    title: "",
  },
  setFilters: () => {},
});

export const FiltersProvider = ({ children }: Props): ReactElement => {
  const [filters, setFilters] = useState<Filters>({
    price: 0,
    category: "all",
    title: "",
  });

  return (
    <FiltersContext.Provider value={{ filters, setFilters }}>
      {children}
    </FiltersContext.Provider>
  );
};
