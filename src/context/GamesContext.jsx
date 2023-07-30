import { createContext } from "react";

const GamesContext = createContext();

export function GamesProvider({ children }) {

    return <GamesContext.Provider>{children}</GamesContext.Provider>
}