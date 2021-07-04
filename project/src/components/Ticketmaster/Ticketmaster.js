import React, { useState, useEffect } from "react"
import EventDisplay from './TicketmasterDisplay'

const Ticketmaster = () => {
   
    const [results, setResults] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    
    useEffect(() => {
        const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'
        const key = '?apikey=SlxUpcwTzOmQybUYr5UcWAmUAb9Xncgi'
        const latlong = '&latlong=39.7684,-86.1581'
        const searchRadius = "&radius=20&unit=miles"
        let url = `${baseUrl}${key}${latlong}`   
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
    fetchResults();
},[]);
    return (
        <div className="main">
            <div className="mainDiv">
                {results.length > 0 ? <EventDisplay results={ results } /> : null}
        </div>
    </div>
    )
}

 

export default Ticketmaster