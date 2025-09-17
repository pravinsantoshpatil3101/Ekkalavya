import React, { createContext, useContext, useState } from "react";
const CommonContext = createContext();

export const useCommonContext = () => useContext(CommonContext);

export const CommonProvider = ({ children }) => {
  

  return (
    <CommonContext.Provider
      value={{
        
      }}
    >
      {children}
    </CommonContext.Provider>
  );
};