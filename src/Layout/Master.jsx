import Header from "../components/Header";
import Container from "./Container";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/ScrollToTop";

const Master = () => {
    return (
        <>
            <ScrollToTop />
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}
export default Master