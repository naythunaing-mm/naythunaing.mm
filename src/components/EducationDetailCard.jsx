import ListIconTag from "./ListIconTag";
import SectionTextTag from "./SectionTextTag";
import SectionTitle from "./SectionTitle";

const EducationDetailCard = ({ about, icon, listIcon }) => {
    return (<>
        <div className=" dark:bg-gray-800 dark:border-gray-700 my-5">
            <div className="flex items-center"><span className="mr-2">{icon}</span><SectionTitle title={about.title} /></div>
            <div className="mt-auto my-3">
                <SectionTextTag text={about.overview} />
                {
                    Array.isArray(about.certificates) &&
                    about.certificates.map((certificate) => (
                        <ListIconTag key={certificate.id} icon={listIcon} text={certificate.name} />
                    ))
                }
            </div>
        </div>
    </>)
}
export default EducationDetailCard