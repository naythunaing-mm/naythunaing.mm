import { useEffect } from "react";
import useTestimonialStore from "../store/useTestimonialStore";
import { useState } from "react";

const Carousel = () => {
    const { images } = useTestimonialStore();

    const [current, setCurrent] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrent(index);
    };

    return (
        <div id="default-carousel" className="relative w-full" data-carousel="slide">
            <div id="indicators-carousel" className="relative w-auto" data-carousel="static">

                <div className="relative h-56 overflow-hidden rounded-lg md:h-96 dark:bg-gray-900">

                    {
                        images.map((img, index) => (

                            <div
                                key={index}
                                className={`absolute  inset-0 transition-opacity duration-700 ease-in-out ${index === current ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <figure className="max-w-screen-md mx-auto text-center">
                                    <svg className="w-10 h-10 mx-auto mb-3 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                                        <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                                    </svg>
                                    <blockquote>
                                        <p className="text-2xl p-4 italic font-medium text-gray-900 dark:text-white">{img.description}</p>
                                    </blockquote>
                                    <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                                        <img className="w-6 h-6 rounded-full" src={img.image_url} alt={`Slide ${index + 1}`} />
                                        <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700">
                                            <cite className="pe-3 font-medium text-gray-900 dark:text-white">Michael Gough</cite>
                                            <cite className="ps-3 text-sm text-gray-500 dark:text-gray-400">CEO at Google</cite>
                                        </div>
                                    </figcaption>
                                </figure>

                            </div>
                        ))
                    }
                </div>

                <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-5 left-1/2">
                    {images.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`w-3 h-3 rounded-full ${current === index ? 'bg-black' : 'bg-gray-300'}`}
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Carousel;
