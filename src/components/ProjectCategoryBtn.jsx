import useMyProjectStore from "../store/useMyProjectStore"
const ProjectCategoryBtn = ({ category }) => {
    const { categories, setActiveCategory } = useMyProjectStore();
    const isActive = categories.find((item) => item.category === category)?.isActive;
    const handleActive = () => {
        setActiveCategory(category);
    };
    return (<>
        <button
            onClick={handleActive}
            type="button"
            className={`inline-block mx-1 text-sm font-medium rounded-lg px-4 py-2 border transition-all duration-200
                        focus:outline-none focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-800
                        ${isActive
                    ? 'bg-blue-700 text-white border-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-700 dark:text-white'
                    : 'text-blue-700 border border-blue-700 bg-white hover:bg-blue-700 hover:text-white dark:text-blue-500 dark:border-blue-500 dark:bg-transparent dark:hover:bg-blue-600 dark:hover:text-white'
                }`}
        >
            {category}
        </button>

    </>)
}
export default ProjectCategoryBtn;