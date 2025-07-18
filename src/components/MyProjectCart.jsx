import a from "../assets/img/a.png"
import CardText from "./CardText"
import ReadMoreBtn from "./ReadMoreBtn"
import SpanTag from "./SpanTag"
import { Link } from "react-router-dom"
const MyProjectCart = ({ project }) => {
    const truncate = (text, maxLength) => {
        return text.length > maxLength ? text.slice(0, maxLength) + " more..." : text
    }

    return (
        <>
            <Link className="max-w-sm flex flex-col bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-full h-44" src={a} alt="" />
                <div className="flex flex-col flex-grow p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {project.title} <SpanTag name={project.category} />
                    </h5>
                    <CardText text={truncate(project.description, 150)} />
                    <div className="mt-auto pt-4">
                        <ReadMoreBtn name="Read More and Demo" />
                    </div>
                </div>
            </Link>
        </>)
}
export default MyProjectCart