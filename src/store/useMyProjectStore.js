import { create } from "zustand";
const useAboutCartStore = create(() => ({
    categories: [
        {
            id: 1,
            isActive: true,
            category: "All PROJECTS",
        },
        {
            id: 2,
            isActive: false,
            category: "REACT",
        },
        {
            id: 3,
            isActive: false,
            category: "PHP",
        },
        {
            id: 4,
            isActive: false,
            category: "LARAVEL",
        },
        {
            id: 5,
            isActive: false,
            category: "JAVA",
        },
        {
            id: 6,
            isActive: false,
            category: "VUE",
        },
    ],
    title: "MY PROJECTS",
    projects: [
        {
            id: 1,
            title: "POS System",
            category: "React",
            description:
                "A responsive Point of Sale (POS) frontend application built with React. It features product browsing, cart functionality, discount handling, and real-time order updates. Designed with usability and performance in mind for small retail businesses.",
            image: "/images/projects/pos-react.jpg",
        },
        {
            id: 2,
            title: "Hotel Booking System",
            category: "Laravel",
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
            category: "React",
            description:
                "An invoice management tool built with React that allows users to create, edit, and download invoices. Includes features like client management, tax calculation, and PDF export. Ideal for freelancers and small businesses.",
            image: "/images/projects/invoice-react.jpg",
        },
    ],
}));
export default useAboutCartStore;
