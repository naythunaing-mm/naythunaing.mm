import { create } from "zustand";
import Image1 from "../assets/img/REACT_POS_1.png";
import Image2 from "../assets/img/REACT_POS_2.png";
import Image3 from "../assets/img/REACT_POS_3.png";
import Image4 from "../assets/img/REACT_POS_4.png";
import invoice1 from "../assets/img/invoice_1.png";
import kenja from "../assets/img/kenja.png";
import LaraImg1 from "../assets/img/larahotel_1.png";
import LaraImg2 from "../assets/img/larahotel_2.png";
import LaraImg3 from "../assets/img/larahotel_3.png";

const useAboutCartStore = create((set) => ({
    title: "MY PROJECTS",
    setActiveCategory: (selectedCategory) =>
        set((state) => ({
            categories: state.categories.map((category) => ({
                ...category,
                isActive: category.category === selectedCategory,
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
            category: "LARAVEL",
        },
        {
            id: 2,
            isActive: false,
            category: "PHP",
        },
        {
            id: 3,
            isActive: false,
            category: "REACT",
        },
        {
            id: 4,
            isActive: false,
            category: "VUE",
        },
        {
            id: 5,
            isActive: false,
            category: "JAVA",
        },
        {
            id: 6,
            isActive: false,
            category: "PHP & JAVA",
        },
    ],
    projects: [
        {
            id: 1,
            title: "POS System",
            category: "REACT",
            bullets: [
                {
                    id: 1,
                    name: "Built with React, using Hooks and Zustand",
                },
                {
                    id: 2,
                    name: "Responsive design for mobile phone, tablet and desktop POS terminals",
                },
                {
                    id: 3,
                    name: "Features product listing, details, cart, and checkout",
                },
            ],
            cover_img: Image1,
            images: [
                {
                    id: 1,
                    img: Image2,
                },
                {
                    id: 2,
                    img: Image3,
                },
                {
                    id: 3,
                    img: Image4,
                },
            ],
            demo: "https://naythunaing-mm.github.io/react-pos/",
            github: "https://github.com/naythunaing-mm/pos-system",
            description:
                "A modern and responsive Point of Sale (POS) web application built with React. It includes product catalog browsing, dynamic cart management, discount handling, and real-time order updates. Developed using React Hooks and Context API for efficient state management. Designed with a clean UI and optimized for small retail stores.",
        },
        {
            id: 2,
            title: "Hotel Booking System",
            category: "LARAVEL",
            bullets: [
                {
                    id: 1,
                    name: "Built using Laravel with MVC architecture",
                },
                {
                    id: 2,
                    name: "Search and book available hotel rooms",
                },
                {
                    id: 3,
                    name: "User authentication and booking history",
                },
                {
                    id: 4,
                    name: "Admin panel for room and reservation management",
                },
                {
                    id: 5,
                    name: "Integrated online payment functionality",
                },
            ],
            description:
                "A comprehensive hotel booking platform built with Laravel. Features include room availability search, user authentication, online reservations, an admin dashboard for managing rooms and bookings, and integrated payment processing. Designed for real-world hospitality operations.",
            cover_img: LaraImg1,
            images: [
                {
                    id: 1,
                    img: LaraImg1,
                },
                {
                    id: 1,
                    img: LaraImg2,
                },
                {
                    id: 1,
                    img: LaraImg3,
                },
            ],
            github: "https://github.com/naythunaing-mm/laravel-booking",
        },
        {
            id: 3,
            title: "Hotel Booking System (Core PHP)",
            category: "PHP",
            cover_img: LaraImg1,
            bullets: [
                {
                    id: 1,
                    name: "Developed with core PHP and MySQL",
                },
                {
                    id: 2,
                    name: "User registration and login system",
                },
                {
                    id: 3,
                    name: "Room listings and availability checker",
                },
                {
                    id: 4,
                    name: "Basic booking functionality with database storage",
                },
                {
                    id: 5,
                    name: "Lightweight and suitable for small hotels or learning",
                },
            ],
            description:
                "A lightweight hotel booking system developed using core PHP and MySQL. It offers user registration, room listings, availability checks, and basic booking functionality. Ideal for learning projects or small-scale hotel setups.",
            images: [
                {
                    id: 1,
                    img: LaraImg1,
                },
                {
                    id: 1,
                    img: LaraImg2,
                },
                {
                    id: 1,
                    img: LaraImg3,
                },
            ],
            github: "https://github.com/naythunaing-mm/booking_pure_php",
        },
        {
            id: 4,
            title: "Invoice Management System",
            category: "REACT",
            cover_img: invoice1,
            github: "https://github.com/naythunaing-mm/invoice-app",
            bullets: [
                {
                    id: 1,
                    name: "Built with React and functional components",
                },
                {
                    id: 2,
                    name: "Create, update, and delete invoices",
                },
                {
                    id: 3,
                    name: "Real-time order updates (mock API integration)",
                },
                {
                    id: 4,
                    name: "Manage client information dynamically",
                },
                {
                    id: 5,
                    name: "Automatic tax and total calculations",
                },
                {
                    id: 6,
                    name: "Download invoices as PDF files",
                },
            ],
            description:
                "A React-based invoice management application for freelancers and small businesses. Users can create, edit, and download invoices, manage client details, calculate taxes, and export invoices as PDF files.",
            images: [
                { id: 1, img: invoice1 }
            ],
        },
        {
            id: 5,
            title: "Kenja Cloud - Integrated School Affairs Management System",
            category: "PHP & JAVA",
            cover_img: kenja,
            bullets: [
                {
                    id: 1,
                    name: "Built with PHP and Java",
                },
                {
                    id: 2,
                    name: "All-in-One School Management",
                },
                {
                    id: 3,
                    name: "User-Friendly Interface",
                },
                {
                    id: 4,
                    name: "Customizable Reports and Layouts",
                },
                {
                    id: 5,
                    name: "Cost-Effective Cloud Deployment",
                },
                {
                    id: 6,
                    name: "High Security and Access Control",
                },
                {
                    id: 7,
                    name: "Ongoing Free Updates and Support",
                },

                {
                    id: 8,
                    name: "Future Expansion with Sundai Educational Services",
                },
            ],
            description:
                "I contributed to the development and integration of Kenja Cloud, a cloud-based school administration platform used by over 800 schools across Japan. It provides a complete suite for handling student records, attendance, grades, health data, and reporting. The system is designed to be user-friendly, customizable, and highly secure, with seamless cloud deployment and minimal setup cost. My role involved working with [backend/frontend/data integration] to ensure smooth operation and scalability of the system.",
            images: [],
        },
    ],
    description:
        "Here are some of the projects I've built using modern web technologies. Each one showcases my ability to design, develop, and deploy functional applications with real-world use cases. From booking systems to invoice management tools, I focus on writing clean, maintainable code and creating user-friendly interfaces.",
}));
export default useAboutCartStore;
