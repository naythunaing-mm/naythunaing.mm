import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import ListIconTag from "./ListIconTag"
const ExperienceDetailCard = ({ about, icon, listIcon }) => {
    return (<>
        <div className=" dark:bg-gray-800 dark:border-gray-700 my-5">
            <div className="flex items-center"><span className="mr-2">{icon}</span><SectionTitle title={about.title} /></div>
            <div className="mt-auto my-3">
                <SectionTextTag text={about.overview} />
                <div className="grid grid-cols-2">
                    {
                        Array.isArray(about.companies) &&
                        about.companies.map((company) => (
                            <ListIconTag key={company.id} icon={listIcon} text={company.name} />
                        ))
                    }
                </div>
            </div>
        </div>
    </>)
}
export default ExperienceDetailCard