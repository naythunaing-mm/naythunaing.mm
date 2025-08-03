const DemoBtn = ({ icon, name, path }) => {
    return (<>
        <a
            to={path}
            className="inline-flex items-center gap-1 rounded-lg border bg-blue-700 border-blue-800 px-3 py-1 transition-colors hover:bg-blue-500"
        >
            <span className="text-sm font-bold text-white group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {name}
            </span>
            {icon}
        </a>

    </>)
}
export default DemoBtn