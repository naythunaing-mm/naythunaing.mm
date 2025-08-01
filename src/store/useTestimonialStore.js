import { create } from "zustand";
const useTestimonialStore = create(() => ({
    title: "TESTIMONIALS",
    description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
    testimonials: [
        // {
        //     id: 1,
        //     image_url:
        //         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     name: "John Doe",
        //     role: "Project Manager, TechZone Inc.",
        //     description:
        //         "Working with Nay Thu Naing was an excellent experience. He delivered high-quality work on time and always communicated clearly throughout the project. Our internal tools now run smoother thanks to his full stack expertise.",
        // },
        // {
        //     id: 2,
        //     image_url:
        //         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     name: "Emily Smith",
        //     role: "CEO, HotelPro Solutions",
        //     description:
        //         "The hotel booking system Nay built exceeded our expectations. From frontend design to backend booking logic, everything was clean, fast, and reliable. Highly recommended for anyone seeking a dependable developer.",
        // },
        // {
        //     id: 3,
        //     image_url:
        //         "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
        //     name: "Michael Tanaka",
        //     role: "Freelance Designer",
        //     description:
        //         "Nay is not only technically skilled but also very easy to work with. He turned our ideas into functional features and ensured seamless integration with our design. A pleasure to collaborate with!",
        // },
    ],
}));
export default useTestimonialStore;
