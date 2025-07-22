import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import useServiceStore from "../store/useServiceStore";
import ServiceDetailCard from "./ServiceDetailCard";
import { HiCog, HiCode, HiServer, HiOutlineLightningBolt, HiLink } from "react-icons/hi";

const ServiceSectionDetail = () => {
    const { title, description, webDevelopments, frontendDevelopments, backendDevelopments, apiDevelopments, maintenanceDevelopments } = useServiceStore();

    return (<>
        <div className="py-16  px-2 sm:px-6 md:px-8 lg:px-10 xl:px-12 2xl:px-20 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <SectionTextTag text={description} />

            {
                webDevelopments.map((webDevelopment, index) => <ServiceDetailCard key={index} detail={webDevelopment} icon={< HiCode className="w-10 h-10 text-green-600" />} />)
            }
            {
                frontendDevelopments.map((frontendDevelopment, index) => <ServiceDetailCard key={index} detail={frontendDevelopment} icon={< HiOutlineLightningBolt className="w-10 h-10  text-yellow-400" />} />)
            }
            {
                backendDevelopments.map((backendDevelopment, index) => <ServiceDetailCard key={index} detail={backendDevelopment} icon={< HiCog className="w-10 h-10 text-gray-600" />} />)
            }
            {
                apiDevelopments.map((apiDevelopment, index) => <ServiceDetailCard key={index} detail={apiDevelopment} icon={< HiLink className="w-10 h-10 text-gray-600" />} />)
            }
            {
                maintenanceDevelopments.map((maintenanceDevelopment, index) => <ServiceDetailCard key={index} detail={maintenanceDevelopment} icon={< HiServer className="w-10 h-10 text-gray-600" />} />)
            }
        </div>
    </>)
}
export default ServiceSectionDetail