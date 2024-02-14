import React, {useEffect, useState} from "react";
import {
    Box,
    Container,
    Typography,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
} from "@mui/material";

function ListarStudents() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [token, setToken] = useState("");
    const [studentes, setstudentes] = useState([]);
    //Verificar se tem token


    useEffect(() => {
        fetch("http://localhost:8080/students/")
          .then((res) => res.json())
          .then((res) => {
              setstudentes(res);
          });
    }, []);

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
                    Listar studentes
                </Typography>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Categoria</TableCell>
                                <TableCell>Distrito</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {studentes.map((student) => (
                              <TableRow key={student.id}>
                                  <TableCell>{student.category}</TableCell>
                                  <TableCell >{student.reportingdistrictname}</TableCell>
                              </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
export default ListarStudents;
