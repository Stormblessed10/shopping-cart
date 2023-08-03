import Shop, { loader as shopLoader } from "./pages/Shop";
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import Home from './pages/Home';
import { GamesProvider } from "./context/GamesContext";
import Game, { loader as gameLoader } from "./pages/Game";
import PageNotFound from "./pages/PageNotFound";

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/shop",
        element: <Navigate replace to="top/all-time-top/1"/>,
      },
      {
        path: "/shop/:category/:id/:page",
        element: <Shop/>,
        loader: shopLoader
      },
      {
        path: "/shop/:category/:id",
        element: <Navigate replace to="1"/>,
      },
      {
        path: "/game/:id",
        element: <Game/>,
        loader: gameLoader,
      },
      {
        path: "/shop/:category/:id/:page/game/:id",
        element: <Game/>,
        loader: gameLoader,
      },
      {
        path: "*",
        element: <PageNotFound/>,
      },
    ]
  },
]);

export default function App() {
  return <GamesProvider><RouterProvider router={router}/></GamesProvider>
}