import React from 'react'
import Grid from '@mui/material/Grid';
import Crudform from './crud-form';
import Display from './display';
import Header from './header';
import '../assets/layout.css'

export default function Layout() {
  return (
    <div>
        <Grid container spacing={12}>
            <Grid item xs={12}>
                <Header/>
            </Grid>
        </Grid>
        <div className='margin' >
        <Grid container spacing={12}>
            
            <Grid item xs={4}>
                <Crudform/>
            </Grid>
            <Grid item xs={8}>
                <Display/>
            </Grid>
        </Grid>
        </div>
        
    </div>
  )
}
