import SectionTitle from "./SectionTitle"
import MyProjectCart from "./MyProjectCart"
import useMyProjectStore from "../store/useMyProjectStore"

const MyProjectSection = () => {
    const { title, projects } = useMyProjectStore();
    return (<>
        <div className="py-16 px-5 bg-white my-5  dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {projects.map((project, index) => (<MyProjectCart key={index} project={project} />))}
                {projects.map((project, index) => (<MyProjectCart key={index} project={project} />))}
                {projects.map((project, index) => (<MyProjectCart key={index} project={project} />))}
                {projects.map((project, index) => (<MyProjectCart key={index} project={project} />))}

            </div>
        </div>
    </>)
}
export default MyProjectSection