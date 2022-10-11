import { useState, createContext } from "react";
const initialState = {
  loading: false,
  showLoading: () => {},
  hideLoading: () => {},
};

export const LoadingContext = createContext(initialState);

export const LoadingProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const showLoading = () => {
    setLoading(true);
  };

  const hideLoading = () => {
    setLoading(false);
  };

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};

