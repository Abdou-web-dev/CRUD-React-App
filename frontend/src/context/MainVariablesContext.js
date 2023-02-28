import { createContext, useState } from "react";

export const MainVariablesContext = createContext();

export const MainVariablesContextProvider = ({ children }) => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(true);
  const [openSearchInputModal, setopenSearchInputModal] = useState(false);

  return (
    <MainVariablesContext.Provider
      value={{
        hamburgerMenuIsOpen,
        setHamburgerMenuIsOpen,
        openSearchInputModal,
        setopenSearchInputModal,
      }}
    >
      {children}
    </MainVariablesContext.Provider>
  );
};
