import Shop, { loader as shopLoader } from "./pages/Shop";
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import { GamesProvider } from "./context/GamesContext";
import Game, { loader as gameLoader } from "./pages/Game";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/shop",
        element: <Navigate replace to="genres/role-playing-games-rpg"/>,
        loader: shopLoader
      },
      {
        path: "/shop/:category/:id",
        element: <Shop></Shop>,
        loader: shopLoader
      },
      {
        path: "/game",
        element: <Navigate to="1"/>,
        loader: gameLoader
      },
      {
        path: "/game/:id",
        element: <Game/>,
        loader: gameLoader,
      },
      {
        path: "/shop/:category/:id/game",
        element: <Navigate to="1"/>,
        loader: gameLoader
      },
      {
        path: "/shop/:category/:id/game/:id",
        element: <Game/>,
        loader: gameLoader,
      },
    ]
  },
]);

export default function App() {
  return <GamesProvider><RouterProvider router={router}/></GamesProvider>
}