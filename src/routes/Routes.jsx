import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home"
import Calendar from "../pages/Calendar"
import BibliotecaVirtual from "../pages/Biblioteca_Virtual"


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Home/>
    },
     {
        path: '/Calendar',
        element: <Calendar/>
    },
    {
        path: '/Biblioteca_Virtual',
        element: <BibliotecaVirtual/>
    },
])