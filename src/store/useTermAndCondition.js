import { create } from "zustand";

const useTermAndCondition = create(() => ({
    title: "Terms&Conditions",
    rules: [
        {
            id: 1,
            title: "About",
            description: "I'm Nay Thu Naing, a passionate full-stack developer with experience in PHP, Laravel, Java, Vue, and React. I enjoy building clean, scalable, and user-friendly applications for real-world use.",
        },
        {
            id: 2,
            title: "PrivacyAndPolicy",
            description: "This portfolio does not collect personal data. Any information shared via the contact form will be kept confidential and used solely for communication purposes.",
        },
        {
            id: 3,
            title: "Licensing",
            description: "All content, code samples, and designs showcased on this portfolio are the intellectual property of Nay Thu Naing. Please do not reuse or reproduce without permission.",
        },
        {
            id: 4,
            title: "Contact",
            description: "Feel free to reach out for freelance work, collaborations, or tech discussions. Email: naythunaing.jp@gmail.com Phone: +95 9772803152",
        }
    ],
}));
export default useTermAndCondition;
