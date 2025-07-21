import SectionTextTag from "./SectionTextTag"
import EducationListIconTag from "./EducationListIconTag"
import SectionTitle from "./SectionTitle"
const SkillDetailCard = ({ about, icon, listIcon }) => {
    return (<>
        <div className=" dark:bg-gray-800 dark:border-gray-700 my-5">
            <div className="flex items-center"><span className="mr-2">{icon}</span><SectionTitle title={about.title} /></div>
            <div className="mt-auto my-3">
                <SectionTextTag text={about.overview} />
                <div className="grid grid-cols-2 gap-1 md:grid-cols-3 lg:grid-cols-3 md:px-10 lg:px-10  ">
                    {
                        Array.isArray(about.skills) &&
                        about.skills.map((skill) => (
                            <EducationListIconTag key={skill.id} icon={listIcon} text={skill.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}
export default SkillDetailCard