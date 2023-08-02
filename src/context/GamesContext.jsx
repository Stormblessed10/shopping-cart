import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

export function GamesProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);

    return <GamesContext.Provider value={{ cart, setCart, isCartOpen, setIsCartOpen }}>{children}</GamesContext.Provider>
}

export function useGames() {
   const context = useContext(GamesContext);
   return context;
}