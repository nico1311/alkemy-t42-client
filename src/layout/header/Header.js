import React, { useState, useEffect } from 'react'
import { AppBar, Toolbar, Typography, makeStyles, Button, IconButton, Drawer, Link, MenuItem } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import LogoImage from './src/images/assets/logosomos'

const useStyles = makeStyles( () => ({
   header: {
      backgroundColor: "#9AC9FB",
      "@media (max-width: 900px)": {
         paddingLeft: 0,
      },
   },
   logo: {
      /*fontFamily: "Work Sans, sans-serif",
      fontWeight: 600,
      color: "#fffefe",
      textAlign: "left",*/
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
      </header>
   )
}
  
