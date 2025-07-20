import { HiCog, HiCode, HiServer, HiOutlineLightningBolt, HiLink } from "react-icons/hi";
import ServiceCard from "./ServiceCard";
import SectionTitle from "./SectionTitle";
import useServiceStore from "../store/useServiceStore";
import SectionTextTag from "./SectionTextTag";
const ServiceSection = () => {
    const { title, description, webDevelopments, frontendDevelopments, backendDevelopments, apiDevelopments, maintenanceDevelopments } = useServiceStore();

    return (<>
        <div className="px-5 py-16 min-w-full max-w-screen-md items-center  md:flex-row md:max-w-xl dark:bg-gray-900">
            <div className="my-3">
                <SectionTitle title={title} />
                <SectionTextTag text={description} />
            </div>

            <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">

                {
                    webDevelopments.map((webDevelopment, index) => (
                        <ServiceCard key={index} icon={< HiCode className="w-20 h-20 mb-2 text-green-500" />} service={webDevelopment} />
                    ))
                }

                {
                    frontendDevelopments.map((frontendDevelopment, index) => (
                        <ServiceCard key={index} icon={< HiOutlineLightningBolt className="w-20 h-20 mb-2 text-yellow-400" />} service={frontendDevelopment} />
                    ))
                }

                {
                    backendDevelopments.map((backendDevelopment, index) => (
                        <ServiceCard key={index} icon={< HiCog className="w-20 h-20 mb-2 text-gray-600" />} service={backendDevelopment} />
                    ))
                }

                {
                    apiDevelopments.map((apiDevelopment, index) => (
                        <ServiceCard key={index} icon={< HiLink className="w-20 h-20 mb-2 text-gray-600" />} service={apiDevelopment} />
                    ))
                }

                {
                    maintenanceDevelopments.map((maintenanceDevelopment, index) => (
                        <ServiceCard key={index} icon={< HiServer className="w-20 h-20 mb-2 text-gray-600" />} service={maintenanceDevelopment} />
                    ))
                }

            </div>

        </div>
    </>)
}
export default ServiceSection