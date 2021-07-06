import React, { useEffect, useState } from "react"
import EventDisplay from './TicketmasterDisplay'
import './Ticketmaster.css'
import { Button, Form, FormGroup, Label, Input} from 'reactstrap';

const Ticketmaster = () => {

    const [results, setResults] = useState([])
    const [pageNumber, setPageNumber] = useState(0)
    const [searchRadius, setSearchRadius] = useState('')
    const [keyword, setKeyword] = useState()
    const [lat, setLat] = useState(null)
    const [lon, setLon] = useState(null)


    const getLocation = () => {

        navigator.geolocation.getCurrentPosition((position) => {
            setLat(position.coords.latitude);
            setLon(position.coords.longitude);

        });
    }

    console.log(lat, lon)

    const fetchResults = (lat, lon) => {
        const baseUrl = 'https://app.ticketmaster.com/discovery/v2/events.json'
        const key = '?apikey=GgX2WiVsjnj7i3jpGc54yUdVt0NHN4PY'
        let url = `${baseUrl}${key}&latlong=${lat},${lon}&page=${pageNumber}&radius=${searchRadius}&unit=miles&keyword=${keyword}`

        fetch(url)
            .then(res => res.json())
            .then(res => {
                setResults(res._embedded.events)
            })
            .catch(error => {
                console.log("error", error)
            })
            console.log(results)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setPageNumber(0);
        getLocation(lat, lon)
        fetchResults(lat, lon);
    };

    useEffect(() => {
        window.scrollTo({
            top: 500,
            behavior:"smooth"
        })
    })
    const changePageNumber = (event, direction) => {
        
        event.preventDefault();
        if (direction === 'down') {
            if (pageNumber > 0) {
                setPageNumber(pageNumber - 1);
                getLocation(lat, lon)
                fetchResults(lat, lon)
            }
        }
        if (direction === 'up') {
            setPageNumber(pageNumber + 1);
            getLocation(lat, lon)
            fetchResults(lat, lon)
        }
    }

return (
        <div className="main">
            <h1>SEARCH FOR EVENTS IN YOUR AREA</h1>
            
            <div className="mainDiv">
                <Form className="form" onSubmit={(e) => handleSubmit(e)}>
                    <FormGroup>
                        <Label className="label">Enter your search radius in miles</Label>
                        <Input type="number" name="searchRadius" onChange={(e) => setSearchRadius(e.target.value)} />
                        <Label className="label">Optional - Enter a keyword to narrow your search</Label>
                        <Input type="text" name="keyword" onChange={(e) => setKeyword(e.target.value)} />
                    </FormGroup>
                    <Button className="submit" color="success">Click for events in your area</Button>
                </Form>
                {results.length > 0 ? <EventDisplay results={results} 
                changePageNumber={changePageNumber} 
                /> : null}
            </div>
        </div>
    )
}



export default Ticketmaster

