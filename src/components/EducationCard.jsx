import { Link } from "react-router-dom";
import CardText from "./CardText";
import SpanTag from "./SpanTag";
import ReadMoreBtn from "./ReadMoreBtn";
const EducationCard = ({ icon, education }) => {
    const truncate = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + " more..." : text
    }
    return (<>
        <Link to={`/about/educations/${education.id}`} className="flex mx-auto hover:border-gray-800 dark:hover:border-gray-50 flex-col max-w-md p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={education.title} />
            </div>
            <div className="mt-auto">
                <CardText text={truncate(education.overview, 150)} />
                <ReadMoreBtn name="Read More" />
            </div>

        </Link></>)
}
export default EducationCard