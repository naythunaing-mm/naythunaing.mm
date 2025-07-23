import { useParams } from "react-router-dom";
import useMyProjectStore from "../store/useMyProjectStore";

const MyProjectDetail = () => {
    const { projects } = useMyProjectStore();
    const { id } = useParams();
    const currentProject = projects.find((project) => project.id === parseInt(id));
    return (<>
        <div className="py-16 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            {
                currentProject ?
                    <>
                        <div className="py-16 px-2 sm:px-6  md:px-8 lg:px-10 xl:px-12 bg-white dark:bg-gray-800 dark:border-gray-700">
                            <img className="mx-auto" src={currentProject.image} alt="" />
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{currentProject.title}</h5>
                            <p className="dark:text-white">{currentProject.description}</p>
                        </div>
                    </>
                    :
                    <><p className="dark:text-white">Project not found.</p> </>
            }
        </div>
    </>)
}
export default MyProjectDetail