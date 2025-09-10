import { HiAcademicCap, HiChip } from "react-icons/hi";
import { FiGlobe } from "react-icons/fi";
import SectionTitle from "./SectionTitle";
import useAboutStore from "../store/useAboutStore";
import SectionTextTag from "./SectionTextTag";
import EducationCard from "./EducationCard";
import SkillCard from "./SkillCard";
import ExperienceCard from "./ExperienceCard";
const AboutSection = () => {
    const { title, educations, skills, experiences, overview } = useAboutStore();

    return (<>
        <div className="py-14 px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={overview} />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  py-5">
                {educations.map((education, index) => (
                    <EducationCard key={index} icon={<HiAcademicCap className="w-24 h-20 mb-2 text-blue-600" />} education={education} />
                ))}

                {skills.map((skill, index) => (
                    <SkillCard key={index} icon={<HiChip className="w-24 h-20 mb-2 border-red-700 text-red-600" />} skill={skill} />
                ))}

                {experiences.map((experience, index) => (
                    <ExperienceCard key={index} icon={<FiGlobe className="w-24 h-20 mb-2 text-green-600 " />} experience={experience} />
                ))}
            </div>
        </div>
    </>)
}
export default AboutSection