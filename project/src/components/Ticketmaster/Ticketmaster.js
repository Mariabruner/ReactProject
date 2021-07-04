import React, { useState} from "react"
import EventDisplay from './TicketmasterDisplay'

const Ticketmaster = () => {
   
    const [results, setResults] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [searchRadius, setSearchRadius] = useState('')
    const [keyword, setKeyword] = useState()
    const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'
    const key = '?apikey=SlxUpcwTzOmQybUYr5UcWAmUAb9Xncgi'
    const latlong = '&latlong=39.7684,-86.1581'
    // const searchRadius = "&radius=20&unit=miles"
    let url = `${baseUrl}${key}${latlong}&page=${pageNumber}&radius=${searchRadius}&unit=miles&keyword=${keyword}`   
    const fetchResults = async () => {  
    try {
    const response = await fetch (url)
    const json = await response.json()
    console.log(json._embedded.events)
    const data = json._embedded.events
    setResults(data)
    console.log(data)
    } catch (error){
    console.log("error", error)
     }
    };
    
const handleSubmit = (event) => {
    event.preventDefault();
    setPageNumber(0);
    fetchResults();
};

const changePageNumber = (event, direction) => {
    event.preventDefault();
    if(direction === 'down') {
        if(pageNumber > 0){
        setPageNumber(pageNumber -1);
        fetchResults()
    }
}
if(direction === 'up') {
    setPageNumber(pageNumber +1);
    fetchResults()
}
}


    return (
        <div className="main">
            <h1>SEARCH FOR EVENTS IN YOUR AREA</h1>
            <div className="mainDiv">
                <form onSubmit={(e) => handleSubmit(e)}>
                    <span>Enter your search radius in miles</span>
                    <input type="number" name="searchRadius" onChange={(e) => setSearchRadius(e.target.value)}/>
                    <span>Optional - Enter a keyword to narrow your search</span>
                    <input type="text" name="keyword" onChange={(e) => setKeyword(e.target.value)}/>
                    <button className="submit">Click for events in your area</button>
                </form>
                {results.length > 0 ? <EventDisplay results={ results } changePageNumber={changePageNumber} /> : null}
        </div>
    </div>
    )
}

 

export default Ticketmaster