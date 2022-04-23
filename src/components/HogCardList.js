import HogCard from "./HogCard";

function HogCardList( {hogs} ) {
    return (
        <div className="ui three stacked cards">
            {hogs.map(hog => (
                <HogCard 
                key={hog.name}
                hog={hog} />

            ))}
        </div>
    )
}

export default HogCardList