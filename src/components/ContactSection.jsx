import SectionTitle from "./SectionTitle"
import useContactStore from "../store/useContactStore"
import InputTag from "./InputTag";
const ContactSection = () => {
    const { title } = useContactStore();
    return (<>
        <div className="py-16 px-5 bg-white dark:bg-gray-800 dark:border-gray-700">
            <SectionTitle title={title} />
            <InputTag />
        </div>
    </>)
}
export default ContactSection