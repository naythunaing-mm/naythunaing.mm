import AboutSection from "../components/AboutSection"
import HomeSection from "../components/HomeSection"
import ServiceSection from "../components/ServiceSection"
import MyProjectSection from "../components/MyProjectSection"
const HomePage = () => {
    return (
        <div className="dark:bg-gray-900 mt-16 dark:shadow-black  min-h-screen">
            <HomeSection />
            <AboutSection />
            <ServiceSection />
            <MyProjectSection />
        </div>
    )
}
export default HomePage