import { create } from "zustand";
import profile_img from "../assets/img/naythunaing.png"
import profile_img1 from "../assets/img/naythu.jpg"
const useHomeStore = create(() => ({
    text: "Hello, I'm",
    name: "Nay Thu Naing",
    profile: profile_img,
    profile_img: profile_img1,
    slogan: '"Building seamless digital experiences from front to back. I craft responsive, scalable, and efficient web solutions that bring ideas to life—one line of code at a time."',
    position: "Full Stack Developer",
}));
export default useHomeStore;
