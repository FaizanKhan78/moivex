import { useEffect, useState } from 'react';
import './heroBanner.scss';
import { useNavigate } from 'react-router-dom';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from "react-redux";

import Img from './../../../components/lazyLoadImage/Img';

import ContentWrapper from './../../../components/contentWrapper/ContentWrapper';

const HeroBanner = () => {
    const [ background, setBackgorund ] = useState("");
    const [ query, setQuery ] = useState("");
    const navigate = useNavigate();
    const { url } = useSelector((state) => state.home);
    const { data, loading } = useFetch("/movie/upcoming");

    useEffect(() => {
        const bg = url.backdrop + data?.results?.[ Math.floor(Math.random() * 20) ]?.backdrop_path;
        setBackgorund(bg);
    }, [ data ]);


    const searchQueryHandler = (event) => {
        if (event.key === "Enter" && query.length > 0) {
            navigate(`/search/${query}`);
        }
        else if (event === "search" && query.length > 0) {
            navigate(`/search/${query}`);
        }
    };
    return (
        <>
            <div className="heroBanner">
                {!loading && <div className="backdrop-img">
                    <Img src={background} />
                </div>}
                <div className="opacity-layer">

                </div>
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="title">Welcome</span>
                        <span className="subTitle">Millons of Movies, TV Shows and People to Discover. Explore now.</span>
                        <div className="searchInput">
                            <input type="text"
                                placeholder='Search For Movie or Tv Show...'
                                onChange={(e) => setQuery(e.target.value)}
                                onKeyUp={searchQueryHandler} />
                            <button onClick={() => searchQueryHandler("search")}>Search</button>
                        </div>
                    </div>
                </ContentWrapper>
            </div>
        </>
    );
};

export default HeroBanner;