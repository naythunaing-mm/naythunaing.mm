const Button = ({ name, link }) => {
    return (
        <a
            href={link}
            download="NayThuNaing_Resume.pdf"
            rel="noopener noreferrer"
        >
            <button
                type="button"
                className="text-blue-900 py-2.5 px-5 me-2 mb-2 text-sm font-bold focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-blue-800 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
                {name}
            </button>
        </a>
    );
};
export default Button