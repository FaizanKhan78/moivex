import './home.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/Popular';

const Home = () => {
    return (
        <>
            <div className="homePage">
                <HeroBanner />
                <Trending />
                <Popular text={"What`s Popular"} url={"popular"} />
                <Popular text={"Top Rated"} url={"top_rated"} />
            </div>
        </>
    );
};

export default Home;