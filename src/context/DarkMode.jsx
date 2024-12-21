import { createContext, useState } from "react";

// buat context
const DarkModeContext = createContext();

const DarkModeContextprovider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    // buat provider sendiri gk kaya redux
    // value di sini agar mengirimkan state yg mau di akses secara global
    <DarkModeContext.Provider value={{ isDarkMode, setIsDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export const DarkMode = DarkModeContext;
export default DarkModeContextprovider;
