import { create } from "zustand";
const useHomeStore = create(() => ({
    text: "Hello, I'm",
    name: "Nay Thu Naing",
    image: "",
    law: '"Full Stack Developer skilled in front-end and back-end technologies, building responsive web applications, RESTful APIs, and databases. Passionate about clean code, scalability, and user-focused solutions."',
    position: "Full Stack Developer",
}));
export default useHomeStore;
