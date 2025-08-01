import Button from "./Button"
import useHomeStore from "../store/useHomeStore"
import { HiOutlineArrowDown } from "react-icons/hi";
const HomeSection = () => {
    const { name, text, slogan, position, profile } = useHomeStore();
    return (<>
        <div className=" py-10 min-w-full max-w-screen-md items-center md:max-w-xl dark:bg-gray-900">
            <div className="flex px-2 sm:px-6 lg:px-8 justify-center">
                <div className="h-full">
                    <img
                        className="object-cover mx-auto h-full w-full sm:h-2/3 sm:w-2/3 md:h-1/2 md:w-1/2 lg:w-1/2 lg:h-1/2 rounded-t-lg  md:rounded-none md:rounded-s-lg"
                        src={profile}
                        alt=""
                    />
                </div>
                <div className="px-2 md:px-8 lg:px-4 overflow-x-auto">
                    <h5 className="mb-1 text-xs md:text-xl lg:text-2xl tracking-tight text-gray-900 dark:text-white whitespace-nowrap md:whitespace-normal">
                        {text}
                    </h5>
                    <h3 className="mb-2 text-md text-blue-800 text-md md:text-2xl lg:text-3xl font-bold tracking-tight  dark:text-blue-700 whitespace-nowrap md:whitespace-normal">
                        {name}
                    </h3>

                    <figure className="max-w-screen-md mx-auto text-center px-2">
                        <svg className="w-3 h-3 md:w-10 md:h-10 mx-auto mb-2 text-gray-400 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
                            <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                        </svg>
                        <blockquote>
                            <p className="text-xs md:text-xl lg:text-xl italic font-medium text-gray-900 dark:text-white text-justify">
                                {slogan}
                            </p>
                        </blockquote>
                        <figcaption className="flex items-center justify-center mt-6 space-x-3 rtl:space-x-reverse">
                            <div className="flex items-center divide-x-2 rtl:divide-x-reverse divide-gray-500 dark:divide-gray-700" >
                                <cite className="pe-3 text-xs md:text-2xl lg:text-2xl font-medium text-gray-900 dark:text-white text-nowrap">{name}</cite>
                                <cite className="ps-3 text-xs md:text-2xl lg:text-2xl text-gray-500 dark:text-gray-400">{position}</cite>
                            </div>
                        </figcaption>
                    </figure>
                </div>
            </div>
            <div className="mt-5 flex flex-col items-center gap-4">
                <div className="p-3 rounded-full bg-slate-100 dark:bg-slate-700 shadow-md animate-bounce">
                    <HiOutlineArrowDown className="w-6 h-6 text-gray-700 dark:text-gray-200" />
                </div>
                <Button name="Download CV" link="/naythunaing.mm/cv/NayThuNaing_Resume.pdf" />
            </div>
        </div>
    </>)
}
export default HomeSection