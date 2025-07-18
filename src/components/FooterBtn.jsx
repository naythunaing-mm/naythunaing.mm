import { Link } from "react-router-dom";
const FooterBtn = ({ icon, name, path }) => {
    return (<>
        <Link to={path} type="button" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group">
            {icon}
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{name}</span>
        </Link>
    </>)
}
export default FooterBtn;