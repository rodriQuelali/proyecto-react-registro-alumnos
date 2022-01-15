
import {useEffect, useState} from "react";
import axios from 'axios'
import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import ButtonAppBar from "./AppBar";
import { prodUrl } from '../utils/constants';


const ListaAlumnos = (props) =>{
    //const url = "listAlumnosActivos";
    const [products, setProducts] = useState([])


    useEffect(() => {
        

        axios.get(prodUrl + 'listAlumnosActivos').then(response => {
            const treatedProducts = response.data.map(item=>{
                return {
                    ...item,
                    nombre: item.nombre,
                    direccion: item.direccion
                }
            })
            setProducts(treatedProducts)
        })
    }, [])

    const divStyle = {
        //width: '1000px',
        //margin: '20px',
        //padding: '10px',
      };
    
    return (
        <div>
            <ButtonAppBar/>
            <TableContainer style={divStyle} component={Paper}>
                <Table  sx={{ minWidth: 550 }} aria-label="simple table" >
                    <TableHead>
                    <TableRow>
                        <TableCell>NOMBRE COMPLETO</TableCell>
                        <TableCell align="right">DIRECCION</TableCell>
                        
                    </TableRow>
                    </TableHead>
                    <TableBody>
                    {products.map((row, index) => (
                        <TableRow
                        key={index}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.nombre}
                        </TableCell>
                        <TableCell align="right">{row.direccion}</TableCell>
                        
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
        </TableContainer>
    </div>
    )
}

export default ListaAlumnos