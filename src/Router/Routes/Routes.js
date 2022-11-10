import { createBrowserRouter } from "react-router-dom";
import Main from "../../main/Main";
import Home from '../../components/Home/Home'
import Service from '../../components/services/Services'
import Blog from "../../components/blog/Blog";
import Login from "../../components/login/Login";
import Register from "../../components/register/Register";
import Checkout from "../../components/Checkout/Checkout";
import NotFound from "../../components/NotFound/NotFound";
import Order from "../../components/Orders/Order";



export const router = createBrowserRouter([
    {path: "/", element:<Main/>,
    children:[
        {path:"/", element: <Home/>},
        {path:"/home", element: <Home/>},
        {path:"/service", element: <Service/> },
        {path:"/blog", element: <Blog/> },
        {path:"/orders", element: <Order/> },
        {path:"/login", element: <Login/> },
        {path:"/register", element: <Register/> },
        {path:"*", element: <NotFound/> },
        {
            path: '/checkout/:id',
            element: <Checkout />,
            loader: ({params})=> fetch(`https://service-review-server-xi.vercel.app/${params.id}`)
          },
    ]

}
])