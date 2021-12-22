import React from 'react'
import { AppBar, Grid, Toolbar, Typography, InputBase, Box } from '@material-ui/core';
import useStyles from './styles.js';


const Footer = () => {
    const classes = useStyles();
    return (
        <Grid container spacing= {0} style={{width: '100%', backgroundColor: "#3F50B5"}}>
            <Grid item xs={12} md= {12}>
   <div><p style={{color: "white", paddingLeft: 20}}> &copy; 2021.Travel Advisor App. All Rights Reserved.
   </p>
    </div>
              </Grid>
        </Grid> 
  
    )
}



export default Footer
