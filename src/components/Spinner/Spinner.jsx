import { LoadingContext } from "contexts/LoadingContext";
import React, { useContext } from "react";

const Spinner = () => {
  const { loading } = useContext(LoadingContext);
  return (
    <>
      {loading  && (
        <div className="spinner">
         
        </div>
      )}
    </>
  );
};

export default Spinner;
