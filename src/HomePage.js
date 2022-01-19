import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const API = `https://api.openbrewerydb.org/breweries`;

const HomePage = (props) => {
  const [brewing, setBrewing] = useState([]);

  const fetchBreweries = async () => {
    return fetch(API)
      .then((response) => response.json())
      .then((responseData) => {
        setBrewing(responseData);
      })
      .catch((e) => console.log(e));
  };
  useEffect(() => {
    fetchBreweries();
  }, []);

  // Filtering
  const [searchBrewery, setSearchBrewery] = useState("");

  const filteredBreweries = brewing.filter((brew) => {
    return brew.name.toLowerCase().includes(searchBrewery.toLowerCase());
  });
  const resetInputField = () => {
    setSearchBrewery("");
  };

  console.log(filteredBreweries);
  return (
    <div style={{ margin: "0 auto", marginTop: "4%" }}>
      <div className="text-input">
        <div>
          <TextField
            id="standard-size-small"
            color="success"
            label="Search"
            variant="outlined"
            type="text"
            placeholder="Search Brewery"
            onChange={(e) => setSearchBrewery(e.target.value)}
          />
        </div>
        <div style={{ marginLeft: "10px" }}>
          <Button variant="outlined" onClick={resetInputField}>
            Reset Brewery
          </Button>
        </div>
      </div>
      <div className="brewery-list">
        <h1>List of Brewing companies: </h1>
        <h2>{searchBrewery}</h2>
      </div>
      <div className="item-container">
        {filteredBreweries.map((brew) => {
          return (
            <div className="card" key={brew.id}>
              <h3>{brew.name}</h3>
              <h3>{brew.brewery_type}</h3>
              <h3>{brew.city}</h3>

              <Link
                to={`/DetailPage/ 
                    name: " ${brew.name} " ,
                    brewery_type: "${brew.brewery_type} " ,  
                    adress_2: "${brew.adress_2}" ,  
                    address_3: "${brew.address_3}" ,
                    city: "${brew.city}" ,  
                    state: "${brew.state}" ,  
                    country_providence: "${brew.country_providence}", 
                    postal_code: "${brew.postal_code}" , 
                `}
              >
                <Button size="large" variant="contained" color="success">
                  View Details
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default HomePage;
