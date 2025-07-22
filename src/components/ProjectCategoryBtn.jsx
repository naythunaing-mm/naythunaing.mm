import useMyProjectStore from "../store/useMyProjectStore"
const ProjectCategoryBtn = ({ category }) => {
    const { categories, setActiveCategory } = useMyProjectStore();
    const isActive = categories.find((cat) => cat.category === category)?.isActive;
    const handleActive = () => {
        setActiveCategory(category);
    };
    return (<>
        <button
            onClick={handleActive}
            type="button"
            className={`text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2
                dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800
                ${isActive
                    ? 'bg-blue-600 text-white dark:text-black'
                    : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}
        >
            {category}
        </button>
    </>)
}
export default ProjectCategoryBtn;