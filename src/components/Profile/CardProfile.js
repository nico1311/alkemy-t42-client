import React from 'react'
import {Card, Typography, CardContent} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';


function CardProfile(props) {
    
    const useStyles = makeStyles((theme) => ({
        root: {
            textAlign: 'center',
            height: '22vh',
            margin: '3vh',
            marginTop: theme.spacing(5),
            backgroundColor: props.color
        },
        texto:{
            fontSize: '1.5em',
            color: props.font
        },
        titulo:{
            fontWeight: 'bold',
            fontSize: '1.5em',
            color: props.font
        }
    }));

    const classes= useStyles();
    return (
        <Card className={classes.root}>
            <CardContent>
                {props.icono}
                <Typography className={classes.titulo}>
                {props.titulo}
                </Typography>
                <Typography className={classes.texto}>
                {props.texto}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardProfile

