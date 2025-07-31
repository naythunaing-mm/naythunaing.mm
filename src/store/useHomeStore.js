import { create } from "zustand";
import profile_img from "../assets/img/a.png"
const useHomeStore = create(() => ({
    text: "Hello, I'm",
    name: "Nay Thu Naing",
    profile: profile_img,
    slogan: '"Building seamless digital experiences from front to back. I craft responsive, scalable, and efficient web solutions that bring ideas to life—one line of code at a time."',
    position: "Full Stack Developer",
}));
export default useHomeStore;
