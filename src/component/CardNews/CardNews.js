import { makeStyles,  Button, Typography, Card,  CardActions, CardContent } from '@material-ui/core';


const useStyles = makeStyles({
  item: {
    marginTop: 30,
    marginBottom:50,
    marginInline: 12, 
    minWidth: 300,
    boxShadow: '3px 3px 5px 6px #ccc',
    
  },
  title: {
    fontSize: 14,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#094b87'
  },
  pos: {
    marginBottom: 12,
    margin: 10,
    textAlign: 'center',
    paddingRight: 10,
  }
});


const CardNews = ({n}) => {


    const classes = useStyles();

    return ( 
      
      <Card xs={12} sm={6} md={6} lg={3} className={classes.item}>
        {/*<CardMedia img=''/>*/}
        <CardContent>
          <Typography className={classes.title} >
          {n.id} {n.title}
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