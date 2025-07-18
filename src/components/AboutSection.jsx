import { HiAcademicCap, HiOutlineDesktopComputer, HiOutlineBriefcase } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import useAboutStore from "../store/useAboutStore";
import AboutCard from "./AboutCard";
import SectionTextTag from "./SectionTextTag";
const AboutSection = () => {
    const { title, educations, skills, experiences, overview } = useAboutStore();

    return (<>
        <div className="py-16 px-2 sm:px-6  md:px-8 lg:px-10 xl:px-12 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={overview} />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-5">
                {educations.map((education, index) => (
                    <AboutCard key={index} icon={<HiAcademicCap className="w-24 h-20 mb-2 text-gray-600" />} about={education} />
                ))}

                {skills.map((skill, index) => (
                    <AboutCard key={index} icon={<HiOutlineDesktopComputer className="w-24 h-20 mb-2 text-gray-600" />} about={skill} />
                ))}

                {experiences.map((experience, index) => (
                    <AboutCard key={index} icon={<HiOutlineBriefcase className="w-24 h-20 mb-2 text-gray-600" />} about={experience} />
                ))}
            </div>
        </div>
    </>)
}
export default AboutSection