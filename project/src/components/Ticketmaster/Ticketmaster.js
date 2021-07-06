import React, { useState } from "react"
import EventDisplay from './TicketmasterDisplay'
import './Ticketmaster.css'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

const Ticketmaster = () => {

    const [results, setResults] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [searchRadius, setSearchRadius] = useState('')
    const [keyword, setKeyword] = useState()
    function success(pos) {
        let lat = pos.coords.latitude
        let lon = pos.coords.longitude
        console.log(lat, lon)
    }

    function error(err) {
        console.log(err)
    }

    function getPosition() {
        navigator.geolocation.getCurrentPosition(success, error)
    }
    getPosition()


    // const latlong = '&latlong=39.7684,-86.1581'
    

    const fetchResults = (lat, long) => {
       


        const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'
        const key = '?apikey=SlxUpcwTzOmQybUYr5UcWAmUAb9Xncgi'
        let url = `${baseUrl}${key}&latlong=${lat},${long}&page=${pageNumber}&radius=${searchRadius}&unit=miles&keyword=${keyword}`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                // console.log(json._embedded.events)
                // const data = json._embedded.events
                setResults(res._embedded.events)
                // console.log(data)
            })
            .catch(error => {
                console.log("error", error)
            })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        fetchResults();
    };

    const changePageNumber = (event, direction) => {
        event.preventDefault();
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                fetchResults()
            }
        }
        if (direction === 'up') {
            setPageNumber(pageNumber + 1);
            fetchResults()
        }
    }


    return (
        <div className="main">
            <h1>SEARCH FOR EVENTS IN YOUR AREA</h1>
            <div className="mainDiv">
                <Form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                        <Label>Enter your search radius in miles</Label>
                        <Input type="number" name="searchRadius" onChange={(e) => setSearchRadius(e.target.value)} />
                        <Label>Optional - Enter a keyword to narrow your search</Label>
                        <Input type="text" name="keyword" onChange={(e) => setKeyword(e.target.value)} />
                    </FormGroup>
                    <Button className="submit" color="success">Click for events in your area</Button>
                </Form>
                {results.length > 0 ? <EventDisplay results={results} changePageNumber={changePageNumber} /> : null}
            </div>
        </div>
    )
}



export default Ticketmaster