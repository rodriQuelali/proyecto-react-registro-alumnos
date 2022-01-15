import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {useState} from 'react';
import axios from 'axios';
import { prodUrl } from '../utils/constants';


function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const theme = createTheme();
export const Login = () =>{
    const url = "loginAlumnos";
    const [buttonI, setButtonI]= useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget); 
        // eslint-disable-next-line no-console
        // fetch(url, {method: 'POST', body: data})
        // .then(response=>response.json())
        // .then(data=> console.log(data));

        axios.post(prodUrl + url, data).then(response => {
          if(response.data.err === false){
            window.localStorage.setItem('loginSave', JSON.stringify(response.data.alumnos))
            window.location = "pages"
          }else{
            alert(response.data.desc)
          }  
          console.log("response creation", response.data.err)
      })

        // console.log({
        //   email: data.get('email'),
        //   password: data.get('password'),
        // });
      };

    const updateText = e =>{
     const txtN = document.querySelector('#correo');
     const txtP = document.querySelector('#password');
     txtN.value != "" || txtP.value != "" ? setButtonI(true): setButtonI(false);
    }
    
      return (
        <ThemeProvider theme={theme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Inicio de sesion
              </Typography>
              <Box component="form"  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  onChange={updateText}
                  required
                  fullWidth
                  id="correo"
                  label="Email Address"
                  name="correo"
                  autoComplete="email"
                  autoFocus
                />
                <TextField
                  margin="normal"
                  onChange={updateText}
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
                
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  disabled={!buttonI}
                >
                  Ingresar
                </Button>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}