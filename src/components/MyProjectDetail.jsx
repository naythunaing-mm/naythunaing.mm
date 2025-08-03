import { useParams } from "react-router-dom";
import useMyProjectStore from "../store/useMyProjectStore";
import SectionTextTag from "./SectionTextTag";
import ListIconTag from "./ListIcontTag";
import { BiLabel } from "react-icons/bi";
import SpanTag from "./SpanTag";
import { FaRegEye } from "react-icons/fa";
import { useState } from "react";
import DemoBtn from "./DemoBtn";
import GithubBtn from "./GithubBtn";

const MyProjectDetail = () => {
    const { projects } = useMyProjectStore();
    const { id } = useParams();
    const currentProject = projects.find((project) => project.id === parseInt(id));
    const [selectedImage, setSelectedImage] = useState(currentProject.cover_img);
    const handleSelectImage = (e) => setSelectedImage(e.target.src);

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
                            <ListIconTag key={bullet.id} icon={<BiLabel className="w-7 h-7 text-blue-600" />} category={bullet.name} />
                        ))}
                        {currentProject.images.length > 0 &&
                            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4 my-10">
                                <div className="grid gap-4 p-2">
                                    <img
                                        className="h-auto mx-auto max-w-full md:w-auto lg:w-auto rounded-lg border border-slate-400"
                                        src={selectedImage}
                                        alt="selected"
                                    />
                                    <div className="grid grid-cols-5 gap-4">
                                        {currentProject.images.map((image) => (
                                            <img
                                                key={image.id}
                                                onClick={handleSelectImage}
                                                className="cursor-pointer rounded-md border border-gray-300 hover:opacity-80"
                                                src={image.img}
                                                alt={`thumbnail-${image.id}`}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <div className="md:flex md:gap-5 items-center justify-center">
                                    {currentProject.demo && <DemoBtn name="Demo" url={currentProject.demo} icon={<FaRegEye className="w-7 h-7 text-white" />} />}
                                    {currentProject.github && <GithubBtn className="w-8 h-8" source={currentProject.github} />}
                                </div>
                            </div>
                        }
                    </>
                    :
                    <><p className="dark:text-white">Project not found.</p> </>
            }
        </div>
    </>)
}
export default MyProjectDetail