import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom'

function AppHeader() {

  return(
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Container>
          <Toolbar disableGutters>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Players
            </Typography>
            <Button color="inherit" component={ Link } to="/">Home</Button>
            <Button color="inherit" component={ Link } to="/create">Cadastrar Jogador</Button>
            <Button color="inherit" component={ Link } to="/logout" >Logout</Button>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );

}

export default AppHeader;