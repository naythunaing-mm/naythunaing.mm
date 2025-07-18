import CardText from "./CardText";
import SpanTag from "./SpanTag";
const AboutCardDetail = ({ icon, about }) => {
    return (
        <div className="flex flex-col max-w-sm p-2 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center">
                {icon}
                <SpanTag name={about.title} />
            </div>
            <div className="mt-auto">
                <CardText text={about.overview} />
            </div>
        </div>
    );
}
export default AboutCardDetail