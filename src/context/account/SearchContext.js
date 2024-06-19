import { createContext, useContext, useState } from "react";

const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [how, setHow] = useState("phone");
  return (
    <SearchContext.Provider value={{ how, setHow }}>
      {children}
    </SearchContext.Provider>
  );
};

const useSearch = () => useContext(SearchContext);

export { SearchContextProvider, useSearch };
