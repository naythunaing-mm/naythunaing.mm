import { create } from "zustand";
const useAboutCartStore = create(() => ({
    categories: [],
    title: "MY PROJECTS",
    projects: [
        {
            title: "Project",
            text: "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi Here are the biggest the biggest More...",
        },
    ],
}));
export default useAboutCartStore;
