import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import { HiBadgeCheck, HiChip } from "react-icons/hi";
import ListIconTag from "./ListIcontTag";
const ExperienceDetails = ({ experience }) => {
    return (<>
        <div className=" px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {experience ? (
                    <>
                        <div className="flex items-center">
                            <span className="mr-2"><HiChip className="w-10 h-10 text-red-600" /></span>
                            <SectionTitle title={experience.title} />
                        </div>
                        <SectionTextTag text={experience.overview} />
                        <SectionTextTag text={experience.description} />
                        {experience.companies.map((company) => (
                            <ListIconTag key={company.id} icon={<HiBadgeCheck className="w-5 h-5 text-blue-600" />} category={company.name} />
                        ))}

                    </>
                ) : (
                    <><p className="dark:text-white">Experience data not found.</p></>
                )}
            </div>
        </div>
    </>)
}
export default ExperienceDetails