import { FaLinkedin, FaGithub } from 'react-icons/fa';
const GithubBtn = ({ source }) => {
    return (<>
        <div className="flex items-center gap-2">
            <span className="font-semibold">GitHub:</span>
            <a
                href={source}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:underline text-blue-600 underline"
            >
                <FaGithub className="w-5 h-5" />
                <span>{source}</span>
            </a>
        </div>
    </>)
}
export default GithubBtn