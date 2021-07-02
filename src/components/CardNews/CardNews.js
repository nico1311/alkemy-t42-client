import { makeStyles,  Button, Typography, Card,  CardActions, CardContent } from '@material-ui/core';


const useStyles = makeStyles(theme =>{
  return{
  item: {
    marginTop: '15vh',
    marginBottom:'5vh',
    marginInline: '1vw', 
    minWidth: '22vw',
    boxShadow: '3px 3px 5px 6px #ccc',
    [theme.breakpoints.down('md')]:{
      minWidth: '95vw',
      marginTop: '10vh',
    },
    [theme.breakpoints.down('lg')]:{
      minWidth: '22vw',
      marginTop: '10vh',
    },
  },
  title: {
    fontSize: '1.5em',
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#094b87'
  },
  pos: {
    margin: '2vh',
    textAlign: 'center',
    padding: '1vw',
  }
}});


const CardNews = ({n}) => {


    const classes = useStyles();

    return ( 
      
      <Card className={classes.item}>
        <CardContent>
          <Typography className={classes.title} >
          {n.id}  {n.title}
          </Typography>
          <Typography component="p" className={classes.pos}>
            I have good news for you <br />
            {n.content}
          </Typography>
        </CardContent>
        <CardActions >
          <Button size="medium" 
          variant="outlined" 
          color="primary" 
          key = {n.id}>
            here your news</Button>
        </CardActions>
    </Card>
     )
     
}
 
export default CardNews;