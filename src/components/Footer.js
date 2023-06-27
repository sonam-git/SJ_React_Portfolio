import { Grid, Typography } from '@material-ui/core'
import React from 'react'

const Header = () => {
  return (
  <Grid item xs={12} style={{backgroundColor:'blueviolet', position:'fixed'}}>
    <Typography>&copy; {new Date().getFullYear()} All rights reserved.</Typography>
  </Grid>
  )
}

export default Header