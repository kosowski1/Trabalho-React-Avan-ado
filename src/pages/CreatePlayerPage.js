import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button'
import { Checkbox } from '@mui/material';
import FormControlLabel from '@mui/material/FormControlLabel';

import { createPlayer } from '../services/api'

const player = {
  name: "",
  age: "", 
  team: "", 
  majorChampion: false, 
  nationality: "", 
  firstTeam: ""
}

function CreatePlayerPage() {

  const [ fields, setFields ] = useState(player);

  useEffect(() => {
    document.title = "Cadastrar"
  }, []);

  function handleChange(event) {
      const fieldName = event.target.name;
      const value = event.target.value;
    setFields({ ...fields, [fieldName]: value });
  }
  function handleChangeCheckBox(event) {
    const fieldName = event.target.name;
    const value = event.target.checked;
  setFields({ ...fields, [fieldName]: value });
}

  async function handleSubmit(event) {
    event.preventDefault();
    console.log(fields);
    const response = await createPlayer(fields);
    if (response.status === 200) {
      setFields(player);
    }
  }

  return(
    <Container component="main">
      <Box component="form" onSubmit={ handleSubmit } sx={{ mt: 5 }}>
        <Typography variant="h4">
          Novo Jogador
        </Typography>
        <Grid container spacing={2} sx={{ mt: 5 }}>
          <Grid item sm={9}>
            <TextField 
              label="Nome" 
              variant="outlined" 
              name="name"
              fullWidth 
              onChange={ handleChange } 
              value={fields.name} 
            />
          </Grid>
          <Grid item sm={3}>
            <FormControlLabel control={<Checkbox name="majorChampion" checked={fields.majorChampion} variant="outlined" fullWidth onChange={ handleChangeCheckBox } value={fields.majorChampion}  />} label="Campeão de Major" />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Idade" variant="outlined" name="age" fullWidth onChange={ handleChange } value={fields.age} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Time Atual" variant="outlined" name="team" fullWidth onChange={ handleChange } value={fields.team} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Nacionalidade" variant="outlined" name="nationality" fullWidth onChange={ handleChange } value={fields.nationality} />
          </Grid>
          <Grid item sm={6}>
            <TextField label="Primeiro Time" variant="outlined" name="firstTeam" fullWidth onChange={ handleChange } value={fields.firstTeam} />
          </Grid>
          <Grid item sm={12}>
            <Button
              type="submit"
              variant="contained"
              fullWidth
              size="large" 
            >
              Cadastrar Jogador
            </Button> 
          </Grid>
        </Grid>     
      </Box>
    </Container>
  );
}

export default CreatePlayerPage;