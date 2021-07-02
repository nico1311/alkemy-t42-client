import React, { useState} from 'react'
import { AppBar, Toolbar,Tabs, Tab, useMediaQuery,useTheme, makeStyles, Button } from '@material-ui/core'
import LogoImage from '../../../src/images/assets/logosomos.png'
import DrawerComponent from './drawer';

const useStyles = makeStyles(theme => ({
   offset: theme.mixins.toolbar,
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
               <img src={LogoImage} alt='ONG'></img>

               {isMatch ? <DrawerComponent/>: ( 
                  <>
                     <Tabs onClick={handleClick} indicatorColor='secondary' value={value}>
                        <Tab disableRipple label='nosotros'/>
                                 
                        <Tab disableRipple label='contacto'/>
                                    
                        <Tab disableRipple label='novedades'/>
                                 
                        <Tab disableRipple label='actividades'/>
                     
                        <Tab disableRipple label='testimonios'/>
                     
                     </Tabs>
                     <Button variant='contained' color='secondary'>
                        Registrase
                     </Button>

                     <Button variant='contained' color='secondary'>
                        Iniciar sesión
                     </Button>
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
























/*
const useStyles = makeStyles( (theme) => ({
   offset: theme.mixins.toolbar,
   header: {
      backgroundColor: "#9AC9FB",
      "@media (max-width: 900px)": {
         paddingLeft: 0,
      },
   },
   logo: {
      fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#fffefe",
      textAlign: "left",
      backgroundImage: `url(${LogoImage})`
   },
   menuButton: {
      fontFamily: "Open Sans, sans-serif",
      fontWeight: 700,
      size: "18px",
      marginLeft: "100px",
      
   },
   toolbar: {
      display: "flex",
      justifyContent: "space-between",    
    },
    
}))

const headersData = [
   {
      label: "Novedades",
      href: "/novedades",
   },
   {
      label: "Testimonios",
      href: "/testimonios",
   },
   {
      label: "Actividades",
      href: "/actividades",
   },
   {
      label: "Registro",
      href: "/registro",
   },
   {
      label: "Log in",
      href: "/log-in",
   },
]

export default function Header() {
   const classes = useStyles()
   const { header, logo, menuButton } = useStyles()

   const [state, setState] = useState({
      mobileView: false,
      menuOpen: false
   })

   const { mobileView, menuOpen } = state

   useEffect(() => {
      const setResponsiveness = () => {
         if (window.innerWidth < 900){
            setState((prevState) => ({ ...prevState, mobileView: true }))
         }else{
            setState((prevState) => ({ ...prevState, mobileView: false }))
         }        
      }

      setResponsiveness();
      window.addEventListener("resize", () => setResponsiveness())

      return () => {
         window.removeEventListener("resize", () => setResponsiveness())
    }
   }, [])

   const displayDesktop = () => {
      return (
         <Toolbar className={window.toolbar}>
            {ongLogo}
            <div>{getMenuButtons()}</div>
         </Toolbar>
      )
   }

   const displayMobile = () => {

      const handleMenuOpen = () =>
         setState((prevState) => ({ ...prevState, menuOpen: true }))
      const handleMenuClose = () =>
         setState((prevState) => ({ ...prevState, menuOpen: false }))

      return (
        <Toolbar>
            <IconButton
               {...{
                  edge: "start",
                  color: "inherit",
                  "aria-label": "menu",
                  "aria-haspopup": "true",
                  onClick: handleMenuOpen,
               }}
            >
               <MenuIcon />
            </IconButton>
            <Drawer
               {...{
                  anchor: "left",
                  open: menuOpen,
                  onClose: handleMenuClose,
               }}
            >
               <div className="drawaerContainer">{getDrawerChoices()}</div>
            </Drawer>
            
            <div>{ongLogo}</div>
         </Toolbar>
      )
    }

    const getDrawerChoices = () => {
      return headersData.map(({ label, href }) => {
        return (
         <Link
            {...{
              to: href,
              color: "inherit",
              style: { textDecoration: "none" },
              key: label,
            }}
         >
            <MenuItem>{label}</MenuItem>
         </Link>
        )
      })
    }


   const ongLogo = (
      <Typography variant="h4" component="h3" className={logo}>
         ONG
      </Typography>      
   )

   const getMenuButtons = () => {
      return headersData.map(({ label, href }) => {
        return (
          <Button
            {...{
              key: label,
              color: "inherit",
              to: href,
              className: menuButton
            }}
          >
            {label}
          </Button>
        )
      })
    }


   return (
      <header>
         <AppBar className={header}>
            {mobileView ? displayMobile() : displayDesktop()}
         </AppBar>
         <div className={classes.offset}>

         </div>
      </header>
   )
}
*/  
