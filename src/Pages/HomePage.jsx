import AboutSection from "../components/AboutSection"
import HomeSection from "../components/HomeSection"
import ServiceSection from "../components/ServiceSection"
import MyProjectSection from "../components/MyProjectSection"
import TestimonialSection from "../components/TestimonialSection"
import ContactSection from "../components/ContactSection"
const HomePage = () => {
    return (
        <>
            <div className="bg-gray-200">
                <HomeSection />
                <AboutSection />
                <ServiceSection />
                <MyProjectSection />
                <TestimonialSection />
                <ContactSection />
            </div>
        </>
    )
}
export default HomePage