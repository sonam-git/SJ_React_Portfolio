import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const Footer = () => {
  return (
  <Grid item xs={12} >
    <Typography>&copy; {new Date().getFullYear()} All rights reserved.</Typography>
  </Grid>
  )
}

export default Footer