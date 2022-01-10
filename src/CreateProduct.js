import {Box, Button, TextField, Container, Grid, Avatar} from "@mui/material";
import Typography from "@mui/material/Typography";
import axios from 'axios'
import {prodUrl} from "./utils/constants";
import {useState} from "react";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const InputComponent = (props) =>{
    const onChangeValue = (e) =>{
        props.setValue(e.target.value)
    }
    return (
        <Grid item xs={16}>
            <TextField 
            color="secondary" 
            id={props.name} 
            label={props.name} 
            variant="outlined" 
            onChange={onChangeValue} 
            type={props.type}
            fullWidth/>
        </Grid>
    );
}

const CreateProduct = () =>{
    const [name, setName] = useState("")
    const [price, setPrice] = useState(0)
    const [quantity, setQuantity] = useState(0)

    const onCreate  = () =>{
        axios.post(prodUrl, {
            name: name,
            price: price,
            quantity: quantity
        }).then(response => {
            console.log("response creation", response.data)
        })
    }
    

    return (
        <Container component="main" maxWidth="xs">
            <center>
            <Grid elevation={10} container spacing={2}>
                <Grid item xs={8}>
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <AddCircleOutlineIcon />
                </Avatar>
                <Typography mt={2} component="h1" variant="h5">Create product</Typography>
                </Grid>
                
                <InputComponent name={'Name'} setValue={setName} type="text"/>
                <InputComponent name={'Price'} setValue={setPrice} type="number"/>
                <InputComponent name={'Quantity'} setValue={setQuantity} type="number"/>
                <div> Name:{name}</div>

                <Grid item xs={16}><Button onClick={onCreate} variant="contained" fullWidth>Create</Button></Grid>
                
            </Grid>
            </center>
        </Container>
    )
}

export default CreateProduct