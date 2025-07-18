import useAboutStore from "../store/useAboutStore"
import SectionTitle from "./SectionTitle";
import SectionTextTag from "./SectionTextTag";
import { HiAcademicCap, HiOutlineDesktopComputer, HiOutlineBriefcase } from "react-icons/hi";
import EducationCardDetail from "./EducationCardDetail";
const AboutSectionDetail = () => {
    const { title, educations, skills, experiences, overview } = useAboutStore();
    return (<>
        <div className="py-16  px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={overview} />
            <div className="py-5">
                {educations.map((education, index) => (
                    <EducationCardDetail key={index} listIcon={<HiAcademicCap className="w-5 h-5 text-gray-600" />} icon={<HiAcademicCap className="w-10 h-10 text-gray-600" />} about={education} />
                ))}

                {skills.map((skill, index) => (
                    <EducationCardDetail key={index} icon={<HiOutlineDesktopComputer className="w-10 h-10  text-gray-600" />} about={skill} />
                ))}

                {experiences.map((experience, index) => (
                    <EducationCardDetail key={index} icon={<HiOutlineBriefcase className="w-10 h-10  text-gray-600" />} about={experience} />
                ))}
            </div>
        </div>
    </>)
}
export default AboutSectionDetail