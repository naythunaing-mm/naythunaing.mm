
import SectionTextTag from "./SectionTextTag";
import SectionTitle from "./SectionTitle";
const ServiceDetailCard = ({ detail, icon }) => {
    return (<>
        <div className=" dark:bg-gray-800 dark:border-gray-700 my-5">
            <div className="flex items-center"><span className="mr-2">{icon}</span><SectionTitle title={detail.title} /></div>
            <SectionTextTag text={detail.description} />
        </div>
    </>)
}
export default ServiceDetailCard