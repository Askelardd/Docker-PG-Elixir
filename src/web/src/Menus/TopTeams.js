import React, {useEffect, useState} from "react";
import {Box, CircularProgress, Container, FormControl, InputLabel, MenuItem, Select} from "@mui/material";

const DEMO_TEAMS = [
    {"team": "Homelessness", country: "category"},
    {"team": "Students With Disabilities", country: "category"},
    {"team": "Free/Reduced Lunch", country: "category"},
    {"team": "English Learners", country: "category"},
    {"team": "Race/Ethnicity<", country: "category"},
    {"team": "High Needs", country: "category"},

    {"team": "Connecticut", country: "district"},
    {"team": "Andover School District", country: "district"},
    {"team": "Milford School District", country: "district"},
    {"team": "West Hartford School District", country: "district"},
    {"team": "Regional School District 18", country: "district"},


];

const COUNTRIES = [...new Set(DEMO_TEAMS.map(team => team.country))];


function TopTeams() {

    const [selectedCountry, setSelectedCountry] = useState("");

    const [teams, setTeams] = useState(null);

    useEffect(() => {
        //!FIXME: this is to simulate how to retrieve data from the server
        //!FIXME: the entities server URL is available on process.env.REACT_APP_API_ENTITIES_URL
        setTeams(null);

        if (selectedCountry) {
            setTimeout(() => {
                console.log(`you can fetch real data from the API url at ${process.env.REACT_APP_API_URL}`);
                setTeams(DEMO_TEAMS.filter(t => t.country === selectedCountry));
            }, 500);
        }
    }, [selectedCountry])

    return (
        <>
            <h1>Filter</h1>

            <Container maxWidth="100%"
                       sx={{backgroundColor: 'background.default', padding: "2rem", borderRadius: "1rem"}}>
                <Box>
                    <h2 style={{color: "white"}}>Options</h2>
                    <FormControl fullWidth>
                        <InputLabel id="countries-select-label">Country</InputLabel>
                        <Select
                            labelId="countries-select-label"
                            id="demo-simple-select"
                            value={selectedCountry}
                            label="Country"
                            onChange={(e, v) => {
                                setSelectedCountry(e.target.value)
                            }}
                        >
                            <MenuItem value={""}><em>None</em></MenuItem>
                            {
                                COUNTRIES.map(c => <MenuItem key={c} value={c}>{c}</MenuItem>)
                            }
                        </Select>
                    </FormControl>
                </Box>
            </Container>

            <Container maxWidth="100%" sx={{
                backgroundColor: 'info.dark',
                padding: "2rem",
                marginTop: "2rem",
                borderRadius: "1rem",
                color: "white"
            }}>
                <h2>Results</h2>
                {
                    teams ?
                        <ul>
                            {
                                teams.map(data => <li key={data.team}>{data.team}</li>)
                            }
                        </ul> :
                        selectedCountry ? <CircularProgress/> : "--"
                }

            </Container>
        </>
    );
}

export default TopTeams;
