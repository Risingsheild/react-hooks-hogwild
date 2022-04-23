function HogDetails( {greased, weight, medal } ) {
    return (
        <div className="description">
            <strong>{greased ? 'Greased' : 'Nongreased'}</strong>
            <p>
                Highest medal achieved: <strong>{medal}</strong>
            </p>
            <p>
                weight of the hog in a ratio to a fridge: {weight}
            </p>
        </div> 
    )
    
}

export default HogDetails