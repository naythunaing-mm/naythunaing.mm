import Header from "../components/Header";
import Container from "./Container";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Master = () => {
    return (
        <>
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
        </>
    );
}
export default Master