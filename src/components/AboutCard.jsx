import { Link } from "react-router-dom"
import CardText from "./CardText"
import SpanTag from "./SpanTag"

const AboutCard = ({ icon, about }) => {
    const truncate = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + " more..." : text;
    };
    return (<>
        <Link className="flex flex-col max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={about.title} />
            </div>
            <div className="mt-auto">
                <CardText text={truncate(about.overview, 81)} />
            </div>
        </Link>
    </>)
}
export default AboutCard