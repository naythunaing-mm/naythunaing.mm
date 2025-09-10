const Container = ({ children }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <div className="h-16 md:h-20 lg:24"></div>
            <div className="mt-1.5 md:mt-0">
                {children}
            </div>
        </div>
    );
};

export default Container;
