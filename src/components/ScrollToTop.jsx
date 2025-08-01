import { useEffect } from "react";
import { useNavigationType, useLocation } from "react-router-dom";

const ScrollToTop = () => {
    const location = useLocation();
    const navType = useNavigationType();

    useEffect(() => {
        if (navType !== "REPLACE") {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: "auto",
            });
        }
    }, [location]);

    return null;
};

export default ScrollToTop;
