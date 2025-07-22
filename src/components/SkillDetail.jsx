import { HiOutlineDesktopComputer, HiBadgeCheck } from "react-icons/hi";
import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import { useParams } from "react-router-dom";
import useAboutStore from "../store/useAboutStore"
import ListIconTag from "./ListIcontTag";
const SkillDetail = () => {
    const { skills } = useAboutStore()
    const { id } = useParams();
    const skillId = parseInt(id);
    const currentSkill = skills.find(
        (skill) => skill.id === skillId
    );
    return (<>
        <div className=" py-16 px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {currentSkill ? (
                    <>
                        <div className="flex items-center"><span className="mr-2"><HiOutlineDesktopComputer className="w-10 h-10 text-gray-600" />
                        </span><SectionTitle title={currentSkill.title} /></div>
                        <SectionTextTag text={currentSkill.overview} />
                        <SectionTextTag text={currentSkill.description} />
                        <div className="grid grid-cols-2 md:grid-cols-3 my-5">
                            {currentSkill.skills.map((skill) => (
                                <ListIconTag key={skill.id} icon={<HiBadgeCheck className="w-5 h-5 text-blue-600" />} category={skill.name} />
                            ))}
                        </div>
                    </>
                ) : (
                    <>
                        <p className="dark:text-white">Skill data not found.</p>
                    </>
                )}
            </div>
        </div>
    </>)
}
export default SkillDetail