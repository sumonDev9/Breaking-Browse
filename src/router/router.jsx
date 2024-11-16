import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CategoryCard from "../component/CategoryCard";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../component/Login";
import Register from "../component/Register";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <Home></Home>,
        children: [
            {
                path: '',
                element:  <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: '/category/:id',
                element: <CategoryCard></CategoryCard>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: '/',
        element: <AuthLayout></AuthLayout>,
        children: [
            {
                path: '/auth/login',
                element: <Login></Login>
            },
            {
                path: '/auth/register',
                element: <Register></Register>
            },
        ]
    }
])



export default router;