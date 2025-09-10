import useAboutStore from "../store/useAboutStore";
import { useParams } from "react-router-dom";
import { HiBadgeCheck } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import ListIconTag from "./ListIcontTag";
import SectionTextTag from "./SectionTextTag";
import SectionTitle from "./SectionTitle";
const ExperienceDetail = () => {
    const { experiences } = useAboutStore()
    const { id } = useParams();
    const experienceId = parseInt(id);
    const currentExperience = experiences.find(
        (experience) => experience.id === experienceId
    );
    return (<>
        <div className=" py-14 px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {currentExperience ? (
                    <>
                        <div className="flex items-center"><span className="mr-2"><FiGlobe className="w-10 h-10 text-green-600" />
                        </span><SectionTitle title={currentExperience.title} /></div>
                        <SectionTextTag text={currentExperience.overview} />
                        <SectionTextTag text={currentExperience.description} />
                        <div className="grid grid-cols-1 md:grid-cols-3 my-5">
                            {currentExperience.companies.map((company) => (
                                <ListIconTag key={company.id} icon={<HiBadgeCheck className="w-5 h-5 text-blue-600" />} category={company.name} />
                            ))}
                        </div>
                    </>
                ) : (
                    <p>Education data not found.</p>
                )}
            </div>
        </div>
    </>)
}
export default ExperienceDetail