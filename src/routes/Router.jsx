import {createBrowserRouter} from "react-router";
import MainLayout from "../layout/MainLayout/MainLayout";
import ErrorPage from "../pages/errorPage/ErrorPage";
import HomePage from "../pages/HomePage/HomePage";

  
export const Router = createBrowserRouter([
    {
        path: "/" ,
        element : <MainLayout /> ,
        errorElement : <ErrorPage /> ,
        children : [
               {
                index: true ,
                element : <HomePage />
               }
        ]
    }
])