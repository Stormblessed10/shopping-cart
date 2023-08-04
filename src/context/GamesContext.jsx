import { createContext, useContext, useState } from "react";

const GamesContext = createContext();

export function GamesProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [pageError, setPageError] = useState(false);

    return <GamesContext.Provider value={{ pageError, setPageError, cart, setCart, isCartOpen, setIsCartOpen }}>{children}</GamesContext.Provider>
}

export function useGames() {
   const context = useContext(GamesContext);
   return context;
}