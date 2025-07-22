const EducationListIconTag = ({ icon, category, name, year }) => {
    return (<>
        <div className="bg-white p-2 dark:bg-gray-800">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-gray-800 dark:text-gray-50">
                <div className="flex items-center gap-3">
                    <span className="text-xl">{icon}</span>
                    <div>
                        <p className="font-semibold">{category} <span>{year}</span></p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">{name}</p>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default EducationListIconTag