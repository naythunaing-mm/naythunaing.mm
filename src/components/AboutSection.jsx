import { HiAcademicCap, HiOutlineDesktopComputer, HiOutlineBriefcase } from "react-icons/hi";
import SectionTitle from "./SectionTitle";
import useAboutSectionStore from "../store/useAboutSectionStore";
import AboutCard from "./AboutCard";
const AboutSection = () => {
    const { title, educations, skills, experiences } = useAboutSectionStore();

    return (<>
        <div className="py-16 px-5 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-5">
                {educations.map((education, index) => (
                    <AboutCard key={index} icon={<HiAcademicCap className="w-24 h-24 mb-2 text-gray-600" />} about={education} />
                ))}

                {skills.map((skill, index) => (
                    <AboutCard key={index} icon={<HiOutlineDesktopComputer className="w-24 h-24 mb-2 text-gray-600" />} about={skill} />
                ))}

                {experiences.map((experience, index) => (
                    <AboutCard key={index} icon={<HiOutlineBriefcase className="w-24 h-24 mb-2 text-gray-600" />} about={experience} />
                ))}
            </div>
        </div>
    </>)
}
export default AboutSection