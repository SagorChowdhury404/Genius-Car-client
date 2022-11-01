import { createBrowserRouter } from "react-router-dom"
import Main from "../../Layout/Main/Main";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Home/Login/Login";
import Register from "../../Pages/Home/Register/Register";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: "/home",
                element: <Home></Home>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/signup",
                element: <Register></Register>
            },
        ]
    }


])
export default router;