import { Link } from "react-router-dom"
import ReadMoreBtn from "./ReadMoreBtn"
import SpanTag from "./SpanTag"
const ServiceCard = ({ service, icon }) => {
    return (<>
        <Link className="flex flex-col max-w-sm p-6 bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={service.title} />
            </div>
            <div className="mt-auto">
                <p className="my-3 font-normal text-gray-700 dark:text-gray-400">{service.text}</p>
                <ReadMoreBtn name="Read More" />
            </div>
        </Link>
    </>)
}
export default ServiceCard