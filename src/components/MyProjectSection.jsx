import SectionTitle from "./SectionTitle"
import MyProjectCart from "./MyProjectCart"
import useMyProjectStore from "../store/useMyProjectStore"
import ProjectCategoryBtn from "./ProjectCategoryBtn"

const MyProjectSection = () => {
    const { title, projects, categories } = useMyProjectStore();
    return (<>
        <div className="py-16 px-2 sm:px-6  md:px-8 lg:px-10 xl:px-12 bg-white my-5  dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <div className="text-nowrap overflow-x-auto scroll-hidden my-3">
                {
                    categories.map((category) => (<ProjectCategoryBtn key={category.id} category={category.category} />))
                }
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
                {projects.map((project) => (<MyProjectCart key={project.id} project={project} />))}
            </div>
        </div>
    </>)
}
export default MyProjectSection