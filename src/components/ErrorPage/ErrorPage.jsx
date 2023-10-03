import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const ErrorPage = () => {
    return (
        <div>
            {/* <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer> */}
            <Header></Header>
            <h1>Oops!!!</h1>
            <Link to="/">Back Home</Link>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;