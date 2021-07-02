import React, { useState} from 'react'
import { AppBar, Toolbar,Tabs, Tab, useMediaQuery,useTheme, makeStyles, Button, Grid } from '@material-ui/core'
import LogoImage from '../../../src/images/assets/logosomos.png'
import DrawerComponent from './drawer';

const useStyles = makeStyles(theme => ({
   offset: theme.mixins.toolbar,
   logo: {
      width: '5%',
      heigth: '5%',
   },
   root: {
      flexGrow: 1,
   },
   split: {
      marginRight: '20px',
   }
}))

const NavBar = () => {
   const classes = useStyles()

   const [ value, setValue ] = useState(0)

   const handleClick = (e, newValue) => {
      setValue(newValue);
   };

   const theme = useTheme(); //Get a copy of our default theme in our component so that we can access the breakpoints and pass the useMediaQuery

   const isMatch = useMediaQuery(theme.breakpoints.down('sm'));

   return (
      <>
         <AppBar color='primary'>
  
            <Toolbar>
               <img src={LogoImage} className={classes.logo} alt='ONG'></img>

               {isMatch ? <DrawerComponent/>: ( 
                  <>
                     <Grid container>
                        <Grid item className={classes.root}>
                           <Tabs onClick={handleClick} indicatorColor='secondary' value={value} >
                              <Tab disableRipple label='nosotros' />
                                       
                              <Tab disableRipple label='contacto'/>
                                          
                              <Tab disableRipple label='novedades'/>
                                       
                              <Tab disableRipple label='actividades'/>
                           
                              <Tab disableRipple label='testimonios'/>
                           
                           </Tabs>
                        </Grid>
                        <Grid item>
                           <Button variant='contained' color='secondary' className={classes.split}>
                              Registrase
                           </Button>

                           <Button variant='contained' color='secondary' className={classes.split}>
                              Iniciar sesión
                           </Button>
                        </Grid>
                     </Grid>
                  </>
               )}               
            </Toolbar>
         </AppBar>
         <div className={classes.offset}>

         </div>
      </>
   );
};

export default NavBar;




















