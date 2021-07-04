import React from 'react';

const EventDisplay = (props) => {
    return(
        <div>
            {props.results.map(result => {
                return (
                    <div key={result.id}>
                    <h3>{result.name}</h3>
                    <p>{result.dates.start.localDate}</p>
                    <img alt="event image" src={result.images[0].url}/>
                  
                    <a href={result.url} target="_blank">Link</a>
                    

                    </div>
                )
})}
        </div>
    )
}

export default EventDisplay;