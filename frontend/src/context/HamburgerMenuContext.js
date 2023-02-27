import { createContext, useState } from "react";

export const HamburgerMenuContext = createContext();

export const HamburgerMenuContextProvider = ({ children }) => {
  const [hamburgerMenuIsOpen, setHamburgerMenuIsOpen] = useState(false);

  return (
    <HamburgerMenuContext.Provider
      value={{ hamburgerMenuIsOpen, setHamburgerMenuIsOpen }}
    >
      {children}
    </HamburgerMenuContext.Provider>
  );
};
