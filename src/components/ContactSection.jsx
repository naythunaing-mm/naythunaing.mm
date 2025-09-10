import SectionTitle from "./SectionTitle"
import useContactStore from "../store/useContactStore"
import InputTag from "./InputTag";
import SectionTextTag from "./SectionTextTag";
import { FaLinkedin, FaGithub } from 'react-icons/fa';
const ContactSection = () => {
    const { title, description, phone, email, github, linkedin } = useContactStore();
    return (<>
        <section className="py-14 px-6 bg-white dark:bg-gray-800">
            <div className="text-center space-y-2">
                <SectionTitle title={title} />
                <SectionTextTag text={description} />
            </div>
            <div className="pt-6">
                <InputTag />
            </div>
            <div className="space-y-4 mt-10 text-sm text-gray-700 dark:text-gray-200">
                <div className="flex items-center gap-2">
                    <span className="font-semibold">Phone:</span>
                    <a href={`tel:${phone}`} className="hover:underline">{phone}</a>
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-semibold">Email:</span>
                    <a
                        href="https://mail.google.com/mail/u/0/?ogbl#inbox?compose=new"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline text-blue-600"
                    >
                        {email}
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-semibold">GitHub:</span>
                    <a
                        href={github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline text-blue-600"
                    >
                        <FaGithub className="w-5 h-5" />
                        <span>github.com/naythunaing-mm</span>
                    </a>
                </div>

                <div className="flex items-center gap-2">
                    <span className="font-semibold">LinkedIn:</span>
                    <a
                        href={linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 hover:underline text-blue-600"
                    >
                        <FaLinkedin className="w-5 h-5 text-blue-600" />
                        <span>linkedin.com/in/naythunaing-mm</span>
                    </a>
                </div>
            </div>
        </section>
    </>)
}
export default ContactSection