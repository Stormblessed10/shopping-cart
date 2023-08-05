import { loader as shopLoader } from "./pages/Shop";
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import AppLayout from './pages/AppLayout';
import { GamesProvider } from "./context/GamesContext";
import { loader as gameLoader } from "./pages/Game";
import { Suspense, lazy } from "react";
import Spinner from "./components/Spinner";

const Homepage = lazy(() =>import("./pages/Homepage"));
const Shop = lazy(() =>import("./pages/Shop"));
const Game = lazy(() =>import("./pages/Game"));
const PageNotFound = lazy(() =>import("./pages/PageNotFound"));

const router = createBrowserRouter([
  {
    element: <AppLayout/>,
    children: [
      {
        path: "/",
        element: <Homepage/>
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
  return <GamesProvider>
      <Suspense fallback={<Spinner/>}>
        <RouterProvider router={router}/>
      </Suspense>
    </GamesProvider>
}