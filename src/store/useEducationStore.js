import { create } from "zustand";
const useEducationStore = create(() => ({
    id: 1,
    title: "Education",
    certificates: [
        {
            id: 1,
            category: "Diploma in Computing",
            name: "HND in Computing, Scottish Qualifications Authority (UK)",
            year: "2019 - 2021",
        },
        {
            id: 2,
            category: "Bachelor of Science (BSc)",
            name: "University of Greenwich (UK)",
            image: "/images/education/university-of-greenwich.png",
            year: "2019 - 2022",
        },
    ],
    overview:
        "I hold a Bachelor of Science (BSc) degree from the University of Greenwich (UK), where I gained a strong foundation in computer science and software development. Prior to that, I completed a Higher National Diploma (HND) in Computing, which equipped me with practical skills in programming, database management, and system design. My academic background has supported my growth as a full stack developer by combining theoretical knowledge with hands-on technical training.",
    description:
        "Gained solid skills in software engineering, database systems, and web technologies through both academic and practical projects.",
}));
export default useEducationStore;
