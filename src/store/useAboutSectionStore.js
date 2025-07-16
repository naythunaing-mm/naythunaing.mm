import { create } from "zustand";
const AboutSectionStore = create(() => ({
    title: "ABOUT ME",
    educations: [
        {
            title: "Education",
            text: "Here are the biggest the biggest More...",
        },
    ],
    skills: [
        {
            title: "Skill",
            text: "Here are the biggest the biggest More...",
        },
    ],
    experiences: [
        {
            title: "Experience",
            text: "Here are the biggest the biggest More...",
        },
    ],
}));
export default AboutSectionStore;
