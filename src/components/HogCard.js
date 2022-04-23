import { useState } from "react";
import HogDetails from "./HogDetails";

function HogCard( {hog} ) {
    const [isHidden, setIsHidden] = useState(false)
    const [details , setDetails] = useState(false)

    function handleDetailClick() {
        setDetails((details) => !details)
    }

    if (isHidden) return null;

    return (
        <div className="ui eight wide column pigTitle">
            <div className="image">
                <img src={hog.image} alt="hogPicture"/>
            </div>
            <div className="content">
                <h3 className="header">{hog.name}</h3>
                <div className="description">Specialty : {hog.specialty}</div> 
            </div>
            <div className="extra info">
                {details ? <HogDetails hog={hog} /> : null }
                <button className="ui button" onClick={handleDetailClick}>
                    {details ? "Less info" : "More info"}
                </button>
                <button className="ui button" onClick={() => setIsHidden(true)}>
                    Hide 
                </button>
            </div>
        </div>
    )
}

export default HogCard