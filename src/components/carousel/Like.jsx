import { useState } from 'react';
import { AiOutlineHeart, AiTwotoneHeart } from 'react-icons/ai';

const Like = () => {
    const [ heart, setHeart ] = useState(false);
    return (
        <>
            <span>
                <span onClick={() => setHeart(!heart)} style={{ fontSize: "1.3rem", cursor: "pointer", margin: "0px 0px 10px 10px" }}>{heart ? <AiTwotoneHeart style={{ color: "red" }} /> : <AiOutlineHeart />}</span>
            </span>
        </>
    );
};

export default Like;