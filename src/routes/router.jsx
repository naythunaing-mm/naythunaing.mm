import { createBrowserRouter } from "react-router";
import Master from "../Layout/Master";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/ServicePage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Master />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/about",
                element: <AboutPage />,
            },
            {
                path: "/services",
                element: <ServicePage />
            }

        ]
    },
]);
export default router