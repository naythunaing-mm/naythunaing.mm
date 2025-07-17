import { create } from "zustand";
const useAboutStore = create(() => ({
    title: "ABOUT ME",
    overview:
        "Hi, I'm Nay Thu Naing — a full stack developer skilled in Laravel, Java, React, and Vue. I enjoy creating real-world web applications, writing clean code, and working in collaborative environments. Fluent Business in English and Japanese, with over 2 years of industry experience.",
    suboverview:
        "I'm Nay Thu Naing, a passionate full stack web developer with a strong background in PHP, Laravel, Java (Spring Boot), and modern frontend frameworks like Vue.js and React. With over 2 years of experience in a software house, I’ve developed practical, scalable web applications that solve real-world problems. I hold a BSc degree from the University of Greenwich (UK) and an HND Diploma in Computing. I enjoy building both the logic behind systems and the interfaces users interact with. I take pride in writing clean, maintainable code and continuously improving my skills. I'm also comfortable working in agile teams, collaborating on Git, and integrating APIs and databases into robust applications. Aside from coding, I’m fluent in English and Japanese, which helps me connect with international teams and clients. I'm always eager to take on new challenges and grow as a developer.",
    educations: [
        {
            title: "Education",
            text: "Here are the biggest the biggest More...",
            overview:
                "I hold a Bachelor of Science (BSc) degree from the University of Greenwich (UK), where I gained a strong foundation in computer science and software development. Prior to that, I completed a Higher National Diploma (HND) in Computing, which equipped me with practical skills in programming, database management, and system design. My academic background has supported my growth as a full stack developer by combining theoretical knowledge with hands-on technical training.",
            degree: "BSc in Computing, University of Greenwich (UK)",
            diploma: "HND in Computing, University of Greenwich (UK)",
            description:
                "Gained solid skills in software engineering, database systems, and web technologies through both academic and practical projects.",
        },
    ],
    skills: [
        {
            title: "Skill",
            text: "Here are the biggest the biggest More...",
            overview:
                "I’m a full stack web developer with strong skills in Laravel, Java, React, and Vue. I enjoy turning ideas into real-world applications with clean code and modern design. From building APIs to crafting beautiful user interfaces, I love solving problems and learning new technologies to grow as a developer.",
            suboverview:
                "As a passionate and detail-oriented full stack developer, I have hands-on experience in both frontend and backend development. I specialize in building dynamic, user-friendly, and scalable web applications using modern technologies such as Laravel, React.js, Vue.js, and Java (Spring Boot). My skill set covers a wide range of technologies including database management, RESTful API integration, version control, and secure authentication systems. I am comfortable working independently or in teams, and I always strive to write clean, maintainable, and testable code. My adaptability and eagerness to learn allow me to keep up with the latest development trends and tools.",
        },
    ],
    experiences: [
        {
            title: "Experience",
            text: "Here are the biggest the biggest More...",
            overview:
                "Over 2 years of experience in a software house environment, working on full stack web projects using Laravel, Java (Spring Boot), PHP, and Vue/React. Built real-world systems including a hotel booking platform and internal business tools. Strong focus on clean code, teamwork, and continuous learning.",
            suboverview:
                "I have over 2 years of hands-on experience working at a software house, where I contributed to multiple full-stack web development projects. During this time, I gained real-world experience in designing, developing, and deploying applications using Laravel, PHP, Java (Core Java, Spring Boot), and modern JavaScript frameworks like Vue.js and React. I collaborated with cross-functional teams to build user-focused features, integrate APIs, and optimize performance across both frontend and backend systems. Notable projects include a Hotel Booking System built with Laravel, and a Kenja System developed using both PHP and Java, showcasing my ability to work across different technologies and deliver practical, high-impact solutions. My experience has equipped me with a strong understanding of agile development, code versioning, testing, and maintaining scalable applications in a fast-paced environment.",
        },
    ],
}));
export default useAboutStore;
