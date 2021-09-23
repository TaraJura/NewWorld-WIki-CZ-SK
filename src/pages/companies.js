import React from 'react'
import '../style/companies.css';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {DataGrid, GridRowsProp, GridColDef} from '@mui/x-data-grid';

const rows: GridRowsProp = [
    {id: 1, logo: '<img src="logo.png">', title: 'World', server: 'World', faction: 'World', type: 'World', members: 'World'},
    {id: 2, logo: 'Hello', title: 'World', server: 'World', faction: 'World', type: 'World', members: 'World'},
    {id: 3, logo: 'Hello', title: 'World', server: 'World', faction: 'World', type: 'World', members: 'World'},
    {id: 4, logo: 'Hello', title: 'World', server: 'World', faction: 'World', type: 'World', members: 'World'},
    {id: 5, logo: 'Hello', title: 'World', server: 'World', faction: 'World', type: 'World', members: 'World'},
];

const columns: GridColDef[] = [
    {field: 'logo', headerName: 'Logo', width: 150},
    {field: 'title', headerName: 'Jméno', width: 250},
    {field: 'server', headerName: 'Server', width: 180},
    {field: 'faction', headerName: 'Frakce', width: 180},
    {field: 'type', headerName: 'Typ', width: 100},
    {field: 'members', headerName: 'Počet členů', width: 180},
];

export default function Companies() {
    return (
        <div id="company">
            <Container maxWidth="lg">
                <Box sx={{flexGrow: 1, bgcolor: '#151a21', color: '#acacac', height: '100vh'}}>
                    <div class="grid-padding">
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <div style={{height: '90vh', width: '100%'}}>
                                    <DataGrid rows={rows} columns={columns}/>
                                </div>
                            </Grid>
                        </Grid>
                    </div>
                </Box>
            </Container>
        </div>
    )
}
