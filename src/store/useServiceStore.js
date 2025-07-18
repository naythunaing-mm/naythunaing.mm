import { create } from "zustand";
const useServiceStore = create(() => ({
    title: "SERVICES",
    description:
        "I build complete web applications from frontend to backend using modern technologies like Laravel, Spring Boot, React, and Vue. I focus on responsive design, performance, and scalability.",
    webDevelopments: [
        {
            title: "Web Development",
            description:
                "Build dynamic and scalable websites or web applications using modern technologies such as Laravel, Java (Spring Boot), React, and Vue. From concept to deployment, I deliver end-to-end solutions tailored to client needs.",
        },
    ],
    frontendDevelopments: [
        {
            title: "Frontend Development",
            description:
                "Craft responsive, user-friendly interfaces using React, Vue, Tailwind CSS, and Bootstrap. I focus on clean design, accessibility, and smooth user experiences across all devices.",
        },
    ],
    backendDevelopments: [
        {
            title: "Backend Development",
            description:
                "Develop secure and efficient backend systems with Laravel and Spring Boot. I manage business logic, databases, authentication, and performance optimization with best practices.",
        },
    ],
    apiDevelopments: [
        {
            title: "API Development & Integration",
            description:
                "Design and develop secure, RESTful APIs with clean architecture using Laravel or Java. I also handle authentication, data processing, and integration with third-party services.",
        },
    ],
    maintenanceDevelopments: [
        {
            title: "Maintenance & Support",
            description:
                "Provide ongoing maintenance, updates, and bug fixes to keep your application running smoothly. I ensure long-term stability, performance, and security improvements.",
        },
    ],
}));
export default useServiceStore;
