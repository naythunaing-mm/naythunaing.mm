import { createBrowserRouter } from "react-router";
import Master from "../Layout/Master";
import ErrorPage from "../Pages/ErrorPage";
import HomePage from "../Pages/HomePage";
import AboutPage from "../Pages/AboutPage";
import ServicePage from "../Pages/ServicePage";
import EducationDetailPage from "../Pages/EducationDetailPage";
import SkillDetailPage from "../Pages/SkillDetailPage";
import ExperienceDetailPage from "../Pages/ExperienceDetailPage";
import ContactPage from "../Pages/ContactPage";
import MyProjectPage from "../Pages/MyProjectPage";
import MyProjectDetailPage from "../Pages/MyProjectDetailPage";
import TermAndCondition from "../Pages/TermAndCondition";

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
            },
            {
                path: "/contact",
                element: <ContactPage />
            },
            {
                path: "/projects",
                element: <MyProjectPage />
            },
            {
                path: "/about/educations/:id",
                element: <EducationDetailPage />
            },
            {
                path: "about/skills/:id",
                element: <SkillDetailPage />
            },
            {
                path: "about/experiences/:id",
                element: <ExperienceDetailPage />
            },
            {
                path: "projects/project-detail/:id",
                element: <MyProjectDetailPage />
            },
            {
                path: "terms&conditons",
                element: <TermAndCondition />
            }


        ]
    },
]);
export default router