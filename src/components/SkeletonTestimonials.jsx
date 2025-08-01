const SkeletonTestimonials = () => {
    return (

        <>
            {Array(3).fill(0).map((_, index) => (
                <div
                    key={index}
                    className="absolute inset-0 transition-opacity duration-700 ease-in-out opacity-100 z-20"
                >
                    <figure className="max-w-2xl mx-auto flex flex-col justify-center h-full px-4 text-center animate-pulse">
                        <svg
                            className="w-10 h-10 mx-auto mb-4 text-gray-300 dark:text-gray-700"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 18 14"
                            aria-hidden="true"
                        >
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <blockquote>
                            <p className="h-6 sm:h-8 md:h-10 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mx-auto mb-4"></p>
                            <p className="h-6 sm:h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mx-auto"></p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3">
                            <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-700"></div>
                            <div className="flex flex-col items-start text-left space-y-2">
                                <div className="h-4 bg-gray-300 dark:bg-gray-700 rounded w-24"></div>
                                <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-16"></div>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            ))}

        </>
    )
}
export default SkeletonTestimonials