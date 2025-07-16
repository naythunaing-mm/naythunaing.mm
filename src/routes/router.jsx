import { createBrowserRouter } from "react-router";
import Master from "../Layout/Master";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Master />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            }
        ]
    },
]);
export default router