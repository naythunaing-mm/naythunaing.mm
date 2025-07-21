const Container = ({ children }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <div className="dark:bg-gray-900 mt-16 dark:shadow-black bg-white min-w-full  min-h-screen">
                {children}
            </div>
        </div>
    );
};

export default Container;
