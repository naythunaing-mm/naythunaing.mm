import useAboutStore from "../store/useAboutStore"
import SectionTitle from "./SectionTitle";
import SectionTextTag from "./SectionTextTag";
import EducationDetails from "./EducationDetails";
import SkillDetails from "./SkillDetails";
import ExperienceDetails from "./ExperienceDetails";
const AboutSectionDetail = () => {
    const { title, educations, skills, experiences, overview } = useAboutStore();
    return (<>
        <div className="py-14  px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={overview} />
            <div className="py-5">
                {educations.map((education, index) => (
                    <EducationDetails key={index} education={education} />
                ))}

                {skills.map((skill, index) => (
                    <SkillDetails key={index} skill={skill} />
                ))}

                {experiences.map((experience, index) => (
                    <ExperienceDetails key={index} experience={experience} />
                ))}

            </div>
        </div>
    </>)
}
export default AboutSectionDetail