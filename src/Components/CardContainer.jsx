import React from 'react';
import CardMessage from './CardMessage';
import { Container, Grid, } from '@mui/material';

export default function CardContainer() {
    return (
        <Container maxWidth="lg">
           <Grid container justifyContent={'center'}>
  
             <CardMessage />
      
           </Grid>
        </Container>
    )
}