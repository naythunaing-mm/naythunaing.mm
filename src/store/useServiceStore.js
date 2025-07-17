import { create } from "zustand";
const useServiceStore = create(() => ({
    title: "SERVICES",
    description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
    webDevelopments: [
        {
            title: "Web Development",
            text: "Here are the biggest the biggest More...",
        },
    ],
    frontendDevelopments: [
        {
            title: "Frontend Development",
            text: "Here are the biggest the biggest More...",
        },
    ],
    backendDevelopments: [
        {
            title: "Backend Development",
            text: "Here are the biggest the biggest More...",
        },
    ],
    apiDevelopments: [
        {
            title: "API Development & Integration",
            text: "Here are the biggest the biggest More...",
        },
    ],
    maintenanceDevelopments: [
        {
            title: "Maintenance & Support",
            text: "Here are the biggest the biggest More...",
        },
    ],
}));
export default useServiceStore;
