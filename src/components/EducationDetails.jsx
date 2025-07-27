import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import EducationListIconTag from "./EducationListIconTag"
import { HiAcademicCap } from "react-icons/hi";

const EducationDetails = ({ education }) => {

    return (<>
        <div className=" px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {education ? (
                    <>
                        <div className="flex items-center">
                            <span className="mr-2"><HiAcademicCap className="w-10 h-10 text-blue-600" /></span>
                            <SectionTitle title={education.title} />
                        </div>
                        <SectionTextTag text={education.overview} />
                        <SectionTextTag text={education.description} />
                        {education.certificates.map((certificate) => (
                            <EducationListIconTag key={certificate.id} icon={<HiAcademicCap className="w-7 h-7 text-blue-600" />} name={certificate.name} category={certificate.category} year={certificate.year} />
                        ))}
                        <div className="grid mx-auto grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 my-10">
                            {education.images.map((image) => (
                                <div key={image.id}>
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={image.img_url}
                                        alt={`image-${image.id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (
                    <><p className="dark:text-white">Education data not found.</p></>
                )}
            </div>
        </div>
    </>)
}
export default EducationDetails