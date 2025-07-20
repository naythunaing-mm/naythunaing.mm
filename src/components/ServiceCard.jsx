import { Link } from "react-router-dom"
import ReadMoreBtn from "./ReadMoreBtn"
import SpanTag from "./SpanTag"
import CardText from "./CardText"
import { useState } from "react"
const ServiceCard = ({ service, icon }) => {
    const [showFullText, setShowFullText] = useState(false);
    const truncate = (text, maxLength) => {
        return text.length > maxLength && !showFullText
            ? text.slice(0, maxLength) + " more..."
            : text;
    }
    const handleSeemore = () => {
        setShowFullText(prev => !prev);
    }
    return (<>
        <div className="flex flex-col max-w-sm p-6 bg-gray-300 border border-gray-300 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={service.title} />
            </div>
            <div className="mt-auto">
                <button onClick={handleSeemore}>
                    <CardText text={truncate(service.description, 150)} />
                </button>
            </div>
        </div>
    </>)
}
export default ServiceCard