const Container = ({ children }) => {
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <div className="mt-16">
                {children}
            </div>
        </div>
    );
};

export default Container;
