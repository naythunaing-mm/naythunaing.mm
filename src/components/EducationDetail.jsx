import SectionTextTag from "./SectionTextTag"
import SectionTitle from "./SectionTitle"
import useAboutStore from "../store/useAboutStore"
import EducationListIconTag from "./EducationListIconTag"
import { useParams } from "react-router-dom";
import { HiAcademicCap } from "react-icons/hi";
import aImage from '../assets/img/a.png';
const EducationDetail = () => {
    const { educations } = useAboutStore()
    const { id } = useParams();
    const educationId = parseInt(id);
    const currentEducation = educations.find(
        (education) => education.id === educationId
    );
    const images = [
        { id: 1, image_url: aImage },
        { id: 2, image_url: aImage },
        { id: 3, image_url: aImage },
        { id: 4, image_url: aImage },
    ]

    return (<>
        <div className=" py-16 px-2 bg-white dark:bg-gray-800 dark:border-gray-700">
            <div className="mt-auto my-3">
                {currentEducation ? (
                    <>
                        <div className="flex items-center"><span className="mr-2"><HiAcademicCap className="w-10 h-10 text-blue-600" />
                        </span><SectionTitle title={currentEducation.title} /></div>
                        <SectionTextTag text={currentEducation.overview} />
                        <SectionTextTag text={currentEducation.description} />
                        {currentEducation.certificates.map((certificate) => (
                            <EducationListIconTag key={certificate.id} icon={<HiAcademicCap className="w-7 h-7 text-blue-600" />} name={certificate.name} category={certificate.category} year={certificate.year} />
                        ))}
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 my-10">
                            {images.map((image) => (
                                <div key={image.id}>
                                    <img
                                        className="h-auto max-w-full rounded-lg"
                                        src={image.image_url}
                                        alt={`image-${image.id}`}
                                    />
                                </div>
                            ))}
                        </div>
                    </>
                ) : (

                    <><p>Education data not found.</p></>
                )}
            </div>
        </div>
    </>)
}
export default EducationDetail