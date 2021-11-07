import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { DataGrid } from '@mui/x-data-grid';
import Typography from '@mui/material/Typography';

import { Link } from 'react-router-dom'

import {getPlayers, deletePlayer} from "../services/api"
import { IconButton, Button, Dialog} from '@mui/material';
import { Delete } from "@mui/icons-material";
import CreateIcon from '@mui/icons-material/Create';
const RenderDeleteButton = (props) => {
    const { id, row } = props;
    const [isDialogOpen, setIsDialogOpen] = useState(false);
  
    function handleRemove() {
      console.log(row)
      deletePlayer(id).then(() => {
        row.setRows((player) => player.filter((row) => row.id !== id));
        setIsDialogOpen(false);
      });
    }
  
    function handleDialog(e) {
      e.stopPropagation();
      setIsDialogOpen(true);
    }
  
    function fecharDialog(e) {
      e.stopPropagation();
      setIsDialogOpen(false);
    }
    return (
      <>
        <Dialog open={isDialogOpen}>
          <Box padding={4} display="flex" flexDirection="column" alignItems="center">
            <p>
              Deseja Excluir o Jogador?
            </p>
            <div>
              <Button variant="contained" onClick={handleRemove}>
                Sim
              </Button>
              <Button variant="contained" onClick={fecharDialog}>
                Não
              </Button>
              </div>
          </Box>
        </Dialog>
        <IconButton onClick={handleDialog}>
          <Delete />
        </IconButton>
        <IconButton>
        <CreateIcon component={ Link } to={`/update/${id}`} />
        </IconButton>
      </>
    );
  };

const columns = [
    {field: "actions", headerName: 'Ações', width: 150,  renderCell: RenderDeleteButton},
    { field: "name", headerName: 'Nome', width: 250 },
    { field: "age", headerName: 'Idade', width: 75 },
    { field: "team", headerName: 'Time Atual', width: 150 },
    { field: "majonChampion", headerName: 'Campeão de Major', width: 150, renderCell: (val) => {
        return val.row.majorChampion == true ? "SIM" : "NÃO"}},
    { field: "nationality", headerName: 'Nacionalidade', width: 150, },
    { field: "firstTeam", headerName: 'Primeiro Time', width: 150, }
  ];

  function ListPlayersPage () {
    const [rows, setRows] = useState([]);
  
    useEffect(() => {
      document.title = "Listar"
      getPlayersFromAPI();
    }, []);
  
    async function getPlayersFromAPI() {
      const response = await getPlayers();
      console.log(response.data)
      const data = response.data.map((player) => {
        console.log(player)
        player.setRows = setRows;
        return player;
      })
      setRows(data);
    }
  
    return (
      <Container component="main">
        <Box sx={{ mt: 5 }}>
          <Typography variant="h4" sx={{ mb: 5 }}>
            Jogadores
          </Typography>
          <div style={{ height: 600, width: '100%' }}>
            <DataGrid columns={columns} rows={rows} checkboxSelection>
            </DataGrid>
            
          </div>
        </Box>
      </Container>
    );
  }
  
  export default ListPlayersPage;