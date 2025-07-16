import { Link } from "react-router-dom"
import CardText from "./CardText"

const AboutCard = ({ icon, about }) => {
    return (<>
        <Link className="flex flex-col max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <h3 className="mb-2 bg-gray-200 px-2 py-0 dark:bg-gray-700 rounded-lg text-md font-bold tracking-tight text-gray-900 dark:text-white">{about.title}</h3>
            </div>
            <CardText text={about.text} />
        </Link>
    </>)
}
export default AboutCard