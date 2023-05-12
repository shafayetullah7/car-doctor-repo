import About from "./About";
import Carousel from "./Carousel";

const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <div className="mt-32">
                <About></About>
            </div>
        </div>
    );
};

export default Home;