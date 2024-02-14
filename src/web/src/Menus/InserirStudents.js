import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Input,
  Container,
  FormControl,
  InputLabel,
  Typography
} from "@mui/material";

//Login

function InserirStudents() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");

  const [category, setcategory] = useState("");
  const [reportingdistrictname, setreportingdistrictname] = useState("");


  const hadleInserirStudents = async (e) => {
    e.preventDefault();
    const data = {
      category: category,
      reportingdistrictname: reportingdistrictname,
    };
    try {
      process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

      const response = await fetch("http://localhost:8080/students/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        //Permitir cors
        mode: "cors",
      });

      if (response.ok) {
        if (response.status === 201) {
          alert("Student inserido com sucesso");
        }
      } else {
        console.error("Erro ao inserir student");
      }
    } catch (error) {
      console.error("Falha na conexao a BD:", error);
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
                    Adicione Student
                </Typography>
                <form onSubmit={hadleInserirStudents}>
                <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel sx={{ color: "black" }} htmlFor="category">Categoria </InputLabel>
                        <Input
                            id="category"
                            name="category"
                            type="text"
                            //value={text}
                            onChange={(e) => setcategory(e.target.value)}
                            sx={{ color: "black" }}
                        />
                    </FormControl>
                    
                    <FormControl sx={{mt: 2, width: "100%"}} variant="outlined">
                        <InputLabel sx={{ color: "black" }} htmlFor="reportingdistrictname">Distrito</InputLabel>
                        <Input
                            id="reportingdistrictname"
                            name="reportingdistrictname"
                            type="reportingdistrictname"
                            //value={text}
                            onChange={(e) => setreportingdistrictname(e.target.value)}
                            required
                            sx={{ color: "black" }}
                        />
                    </FormControl>


                    
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{mt: 3, mb: 2, backgroundColor: "black", color: "white"}}
                    >
                        Submit
                    </Button>
                </form>
            </Box>
        </Container>
  );
}

export default InserirStudents;
