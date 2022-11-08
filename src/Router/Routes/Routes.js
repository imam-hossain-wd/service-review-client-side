import { createBrowserRouter } from "react-router-dom";
import Main from "../../main/Main";
import Home from '../../components/Home/Home'


export const router = createBrowserRouter([
    {path: "/", element:<Main/>,
    children:[
        {path:"/", element: <Home/>},
        {path:"/home", element: <Home/>},
    ]

}
])