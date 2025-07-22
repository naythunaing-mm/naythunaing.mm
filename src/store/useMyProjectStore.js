import { create } from "zustand";
const useAboutCartStore = create((set) => ({
    setActiveCategory: (selectedCategory) =>
        set((state) => ({
            categories: state.categories.map((cat) => ({
                ...cat,
                isActive: cat.category === selectedCategory,
            })),
        })),
    categories: [
        {
            id: 0,
            isActive: true,
            category: "All PROJECTS",
        },
        {
            id: 1,
            isActive: false,
            category: "REACT",
        },
        {
            id: 2,
            isActive: false,
            category: "PHP",
        },
        {
            id: 3,
            isActive: false,
            category: "LARAVEL",
        },
        {
            id: 4,
            isActive: false,
            category: "JAVA",
        },
        {
            id: 5,
            isActive: false,
            category: "VUE",
        },
    ],
    title: "MY PROJECTS",
    projects: [
        {
            id: 1,
            title: "POS System",
            category: "REACT",
            description:
                "A responsive Point of Sale (POS) frontend application built with React. It features product browsing, cart functionality, discount handling, and real-time order updates. Designed with usability and performance in mind for small retail businesses.",
            image: "/images/projects/pos-react.jpg",
        },
        {
            id: 2,
            title: "Hotel Booking System",
            category: "LARAVEL",
            description:
                "A full-featured hotel booking platform developed using Laravel. It includes room availability search, online reservations, customer authentication, admin panel for room and booking management, and payment integration. Designed for real-world hospitality use cases.",
            image: "/images/projects/hotel-laravel.jpg",
        },
        {
            id: 3,
            title: "Hotel Booking System",
            category: "PHP",
            description:
                "A custom-built hotel booking system using core PHP and MySQL. The system handles user registration, room listing, availability checking, and basic booking functionality. Lightweight and ideal for learning and small-scale hotel operations.",
            image: "/images/projects/hotel-php.jpg",
        },
        {
            id: 4,
            title: "Invoice Management System",
            category: "REACT",
            description:
                "An invoice management tool built with React that allows users to create, edit, and download invoices. Includes features like client management, tax calculation, and PDF export. Ideal for freelancers and small businesses.",
            image: "/images/projects/invoice-react.jpg",
        },
    ],
    description:
        "Here are some of the real-world projects I’ve worked on — showcasing my skills in both frontend and backend development. Each project reflects my ability to solve problems, design user-friendly interfaces, and build scalable, maintainable systems. From full-stack web apps to custom business tools, I focus on delivering clean code, great performance, and practical functionality.",
}));
export default useAboutCartStore;
