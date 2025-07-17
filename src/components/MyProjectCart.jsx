import a from "../assets/img/a.png"
import ReadMoreBtn from "./ReadMoreBtn"
import SpanTag from "./SpanTag"
import { Link } from "react-router-dom"
const MyProjectCart = ({ project }) => {
    return (
        <>
            <Link className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <img className="rounded-t-lg w-full h-44" src={a} alt="" />
                <div className="p-5">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title} <SpanTag name={project.category} /></h5>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400 text-justify">{project.description}</p>
                    <ReadMoreBtn name="Read More and Demo" />
                </div>
            </Link>

        </>)
}
export default MyProjectCart