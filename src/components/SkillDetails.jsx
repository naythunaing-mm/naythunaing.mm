import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import { HiBadgeCheck, HiChip } from "react-icons/hi";
import ListIconTag from "./ListIcontTag";
const SkillDetails = ({ skill }) => {
    return (<>
        <div className=" px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {skill ? (
                    <>
                        <div className="flex items-center">
                            <span className="mr-2"><HiChip className="w-10 h-10 text-red-600" /></span>
                            <SectionTitle title={skill.title} />
                        </div>
                        <SectionTextTag text={skill.overview} />
                        <SectionTextTag text={skill.description} />
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
                            {skill.skills.map((skill) => (
                                <ListIconTag key={skill.id} icon={<HiBadgeCheck className="w-5 h-5 text-blue-600" />} category={skill.name} />
                            ))}
                        </div>

                    </>
                ) : (
                    <><p className="dark:text-white">Skill data not found.</p></>
                )}
            </div>
        </div>
    </>)
}
export default SkillDetails