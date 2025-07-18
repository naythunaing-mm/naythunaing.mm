import { Link } from "react-router-dom"
import ReadMoreBtn from "./ReadMoreBtn"
import SpanTag from "./SpanTag"
import CardText from "./CardText"
const ServiceCard = ({ service, icon }) => {
    const truncate = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + " more..." : text
    }
    return (<>
        <Link className="flex flex-col max-w-sm p-6 bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={service.title} />
            </div>
            <div className="mt-auto">
                <CardText text={truncate(service.description, 150)} />
                <ReadMoreBtn name="Read More" />
            </div>
        </Link>
    </>)
}
export default ServiceCard