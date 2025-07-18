const ListIconTag = ({ icon, text }) => {
    return (<>
        <div className="flex justify-start items-center mx-5 my-2">
            <span className="mr-2">{icon}</span><span>{text}</span>
        </div>
    </>)
}
export default ListIconTag