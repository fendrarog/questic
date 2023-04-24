import { createContext, useCallback, useContext, useState } from "react";

interface StateVariable {
  activeMenu: boolean;
  setActiveMenu: React.Dispatch<React.SetStateAction<boolean>>;
  screenWidth: number | undefined;
  screenHeight: number | undefined;
  handleScreenResize: () => void;
  currentMode: string;
  setThemeMode: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const StateContext = createContext<StateVariable>({} as StateVariable);

interface ContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

export const ContextProvider = ({ children }: ContextProviderProps) => {
  const [activeMenu, setActiveMenu] = useState(true);
  const [screenWidth, setScreenWidth] = useState<number | undefined>(undefined);
  const [screenHeight, setScreenHeight] = useState<number | undefined>(
    undefined
  );
  const [currentMode, setCurrentMode] = useState(
    localStorage.getItem("themeMode") || "Light"
  );

  const handleScreenResize = useCallback(() => {
    setScreenWidth(window.innerWidth);
    setScreenHeight(window.innerHeight);
  }, [setScreenWidth, setScreenHeight]);

  const setThemeMode = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentMode(e.target.checked ? "Dark" : "Light");
    localStorage.setItem("themeMode", e.target.checked ? "Dark" : "Light");
  };

  return (
    <StateContext.Provider
      value={{
        currentMode,
        setThemeMode,
        activeMenu,
        setActiveMenu,
        screenWidth,
        screenHeight,
        handleScreenResize,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
