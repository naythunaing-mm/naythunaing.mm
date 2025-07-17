import SectionTitle from "./SectionTitle"
import useTestimonialStore from "../store/useTestimonialStore"
import Carousel from "./Carousel"
const TestimonialSection = () => {
    const { title } = useTestimonialStore();
    return (<>
        <div className="flex flex-col justify-center py-10 min-w-full max-w-screen-md items-center   md:max-w-xl dark:bg-gray-900">
            <SectionTitle title={title} />
            <Carousel />
        </div>
    </>)
}
export default TestimonialSection