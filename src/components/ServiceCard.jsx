import { Link } from "react-router-dom"
import ReadMoreBtn from "./ReadMoreBtn"
const ServiceCard = ({ service, icon }) => {
    return (<>
        <Link className="flex flex-col max-w-sm p-6 bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <h3 className="mb-2 bg-gray-200 px-2 py-1 dark:bg-gray-700 rounded-lg text-xs font-bold tracking-tight text-gray-900 dark:text-white">{service.title}</h3>
            </div>
            <div className="mt-auto">
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{service.text}</p>
                <ReadMoreBtn name="Read More" />
            </div>
        </Link>
    </>)
}
export default ServiceCard