const TermAndConditionCard = ({ title, description }) => {
    return (<>
        <div className="p-2 my-2">
            <h3 className="font-bold text-xl text-gray-800 dark:text-white">{title}</h3>
            <p className="text-gray-800 dark:text-white text-justify my-2">{description}</p>
        </div>
    </>)
}
export default TermAndConditionCard