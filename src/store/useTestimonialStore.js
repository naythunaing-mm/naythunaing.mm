import { create } from "zustand";
const useTestimonialStore = create(() => ({
    title: "TESTIMONIALS",
    description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
    images: [
        {
            id: 1,
            image_url:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            description:
                "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
        },
        {
            id: 2,
            image_url:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            description:
                "lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
        },
        {
            id: 3,
            image_url:
                "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600",
            description:
                "AAAlorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem alias nam enim possimus! Facere sapiente nihil, sit similique corporis incidunt. Sunt, illo laudantium, assumenda animi",
        },
    ],
}));
export default useTestimonialStore;
