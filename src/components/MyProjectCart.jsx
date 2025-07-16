import a from "../assets/img/a.png"
import ReadMoreBtn from "./ReadMoreBtn"
const MyProjectCart = ({ project }) => {
    return (
        <>
            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                    <img className="rounded-t-lg w-full h-44" src={a} alt="" />
                </a>
                <div className="p-5">
                    <a href="#">
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{project.title}</h5>
                    </a>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.text}</p>
                    <ReadMoreBtn name="Read More and Demo" />
                </div>
            </div>

        </>)
}
export default MyProjectCart