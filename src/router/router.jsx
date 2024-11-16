import { createBrowserRouter, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import CategoryCard from "../component/CategoryCard";

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
    }
])



export default router;