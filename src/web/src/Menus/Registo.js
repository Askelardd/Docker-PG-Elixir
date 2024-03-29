import React, { useState } from "react";
import {
    Box,
    Button,
    Input,
    Container,
    FormControl,
    InputLabel,
    Typography
} from "@mui/material";

function Registar() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the data to be sent to the server
        const data = {
            username: username,
            userpassword: password,
        };

        try {
            // Make a POST request to your backend API
            const response = await fetch("http://localhost:18080/adduser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });

            // Check if the request was successful (status code 200-299)
            if (response.ok) {
                console.log("Data sent successfully!");
                //window.location.href = "/login";
            } else {
                console.error("Failed to send data to the server");
            }
        } catch (error) {
            console.error("Error sending data to the server:", error);
        }
    };

    return (
        <Container>
            <Box
                sx={{
                    marginTop: 4,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}
            >
                <Typography component="h1" variant="h5">
                    Registar
                </Typography>
                <Box
                    component="form"
                    onSubmit={handleSubmit}
                    sx={{ width: "100%", mt: 3 }}
                >
                    <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="username" sx={{ color: "black" }}>
                            Username
                        </InputLabel>
                        <Input
                            id="username"
                            name="username"
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            sx={{ color: "black" }}
                        />
                    </FormControl>
                    <FormControl sx={{ mt: 2, width: "100%" }} variant="outlined">
                        <InputLabel htmlFor="password" sx={{ color: "black" }}>
                            Password
                        </InputLabel>
                        <Input
                            id="password"
                            name="password"
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            sx={{ color: "black" }}
                        />
                    </FormControl>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, backgroundColor: "black", color: "black" }}
                    >
                        Submit
                    </Button>
                </Box>
            </Box>
        </Container>
    );
}

export default Registar;