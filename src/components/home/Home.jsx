import About from "./About";
import Carousel from "./Carousel";
import Services from "./Services";
import Footer from "../shared/Footer";

const Home = () => {
    
    return (
        <div>
            <Carousel></Carousel>
            <div className="mt-32">
                <About></About>
            </div>
            <div className="mt-32">
                <Services></Services>
            </div>
            <div className="mt-32">
                
            </div>
            <div className="mt-32">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Home;