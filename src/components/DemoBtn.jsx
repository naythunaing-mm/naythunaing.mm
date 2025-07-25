import { Link } from "react-router-dom";
const DemoBtn = ({ icon, name, path }) => {
    return (<>
        <Link
            to={path}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-5 py-2 transition-colors hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
        >
            <span className="text-sm font-bold text-gray-600 group-hover:text-blue-600 dark:text-gray-400 dark:group-hover:text-blue-400">
                {name}
            </span>
            {icon}
        </Link>

    </>)
}
export default DemoBtn