import { Button, Grid } from '@mui/material'
import React from 'react'
import { navData } from '.'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <Grid container spacing={2}>
        {
            navData.map((item)=>(
                <Grid item xs={4}>
                    <Link to={item.path}>
                    <Button variant='contained' fullWidth color='success'>{item.title}</Button>
                    </Link>
                    </Grid>
            ))
            
        }
    </Grid>
  )
}

export default Nav