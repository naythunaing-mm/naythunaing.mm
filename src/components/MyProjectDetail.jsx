import { useParams } from "react-router-dom";
import useMyProjectStore from "../store/useMyProjectStore";
import SectionTextTag from "./SectionTextTag";
import EducationListIconTag from "./EducationListIconTag";
import { BiLabel } from "react-icons/bi";

import SpanTag from "./SpanTag";

const MyProjectDetail = () => {
    const { projects } = useMyProjectStore();
    const { id } = useParams();
    const currentProject = projects.find((project) => project.id === parseInt(id));
    return (<>
        <div className="py-16 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            {
                currentProject ?
                    <>
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                            {currentProject.title} <SpanTag name={currentProject.category} />
                        </h5>
                        <SectionTextTag text={currentProject.description} />
                        {currentProject.bullets.map((bullet) => (
                            <EducationListIconTag key={bullet.id} icon={<BiLabel className="w-7 h-7 text-blue-600" />} name={bullet.name} category={bullet.category} year={bullet.year} />
                        ))}
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10">
                            {currentProject.images.map((image) => (
                                <div key={image.id}>
                                    <img
                                        className="h-auto max-w-full rounded-lg border border-slate-400"
                                        src={image.img}
                                        alt={`image-${image.id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                    :
                    <><p className="dark:text-white">Project not found.</p> </>
            }
        </div>
    </>)
}
export default MyProjectDetail