import './pagenotfound.scss';
import { useNavigate } from 'react-router-dom';
import noresult from '../../assets/no-results.png';
const PageNotFound = () => {
    const navigate = useNavigate();
    return (
        <div className='pageNotFound'>
            <h1>Oops ! </h1>
            <h2>404 Error</h2>
            <p>Page Not Found</p>
            <img src={noresult} alt="No Result" />
            <button onClick={() => navigate('/')}>Go Back To Home</button>
        </div>
    );
};

export default PageNotFound;