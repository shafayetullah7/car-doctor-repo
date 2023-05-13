import { Outlet } from "react-router-dom";
import Nav from "./shared/Nav";

const Main = () => {
    return (
        <div className="relative">
            <div className="sticky top-0 z-50">
                <Nav></Nav>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;