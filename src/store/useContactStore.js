import { create } from "zustand";

const useContactStore = create(() => ({
    title: "CONTACT ME",
    description:
        "I'm always open to discussing new projects, freelance opportunities, or collaborative ideas. Whether you have a question, want to start a project, or just want to say hello — feel free to reach out! I’m available via email, phone, or direct message.",
}));
export default useContactStore;
