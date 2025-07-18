import { useEffect } from "react";
import useTestimonialStore from "../store/useTestimonialStore";
import { useState } from "react";

const Carousel = () => {
    const { testimonials } = useTestimonialStore();

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div className="relative w-full">
            <div className="relative w-full" data-carousel="static">
                <div className="relative h-72 sm:h-80 md:h-96 overflow-hidden rounded-lg dark:bg-gray-900">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === current ? "opacity-100 z-20" : "opacity-0 z-10"
                                }`}
                        >
                            <figure className="max-w-2xl mx-auto flex flex-col justify-center h-full px-4 text-center">
                                <svg
                                    className="w-10 h-10 mx-auto mb-4 text-gray-400 dark:text-gray-600"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 18 14"
                                    aria-hidden="true"
                                >
                                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                </svg>
                                <blockquote>
                                    <p className="text-lg sm:text-xl md:text-2xl italic font-medium text-gray-900 dark:text-white">
                                        {testimonial.description}
                                    </p>
                                </blockquote>
                                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                                    <img
                                        className="w-10 h-10 rounded-full border border-gray-300 dark:border-gray-700"
                                        src={testimonial.image_url}
                                        alt={`Photo of ${testimonial.name}`}
                                    />
                                    <div className="flex flex-col items-start text-left">
                                        <span className="font-semibold text-gray-900 dark:text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-sm text-gray-500 dark:text-gray-400">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </figcaption>
                            </figure>
                        </div>
                    ))}
                </div>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-30 flex space-x-2">
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${current === index ? "bg-black dark:bg-white" : "bg-gray-300"
                                }`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Carousel;
