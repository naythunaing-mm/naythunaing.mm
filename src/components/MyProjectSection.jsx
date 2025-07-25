import SectionTitle from "./SectionTitle"
import MyProjectCart from "./MyProjectCart"
import useMyProjectStore from "../store/useMyProjectStore"
import ProjectCategoryBtn from "./ProjectCategoryBtn"
import SectionTextTag from "./SectionTextTag"

const MyProjectSection = () => {
    const { title, projects, categories, description } = useMyProjectStore();
    const currentCategory = categories.find((category) => category.isActive === true);
    const filteredProjects = projects.filter(
        (project) =>
            project.category === currentCategory.category ||
            currentCategory.category === "All PROJECTS"
    );
    return (<>
        <div className="py-16 px-2 sm:px-6  md:px-8 lg:px-10 xl:px-12 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={description} />
            <div className="overflow-x-auto whitespace-nowrap scroll-hidden my-6">
                {categories.map((category) => (
                    <ProjectCategoryBtn key={category.id} category={category.category} />
                ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProjects.length > 0 ? (
                    filteredProjects.map((project) => (
                        <MyProjectCart key={project.id} project={project} />
                    ))
                ) : (
                    <div className="col-span-full text-center text-gray-500 dark:text-gray-300 py-10 shadow-md p-2">
                        No projects found in this category.
                    </div>
                )}
            </div>
        </div>
    </>)
}
export default MyProjectSection