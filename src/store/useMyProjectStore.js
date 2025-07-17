import { create } from "zustand";
const useAboutCartStore = create(() => ({
    categories: [
        {
            id: 0,
            isActive: true,
            category: "All",
        },
        {
            id: 1,
            isActive: false,
            category: "REACT",
        },
        {
            id: 2,
            isActive: false,
            category: "PHP",
        },
        {
            id: 3,
            isActive: false,
            category: "LARAVEL",
        },
        {
            id: 4,
            isActive: false,
            category: "JAVA",
        },
        {
            id: 5,
            isActive: false,
            category: "REACT",
        },
        {
            id: 6,
            isActive: false,
            category: "REACT",
        },
        {
            id: 7,
            isActive: false,
            category: "REACT",
        },
    ],
    title: "MY PROJECTS",
    projects: [
        {
            id: 1,
            title: "POS",
            category: "REACT",
            description:
                "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi Here are the biggest the biggest More...",
        },
        {
            id: 2,
            title: "Hotel Booking System",
            category: "Laravel",
            description:
                "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi Here are the biggest the biggest More...",
        },
        {
            id: 3,
            title: "Invoice Management System",
            category: "REACT",
            description:
                "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi Here are the biggest the biggest More...",
        },
    ],
}));
export default useAboutCartStore;
