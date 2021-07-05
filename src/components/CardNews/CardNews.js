import {
  Button,
  Typography,
  Card,
  CardActions,
  CardContent,
} from '@material-ui/core';
import useStyles from './style';

const CardNews = ({ n }) => {
  const classes = useStyles();
  return (
    <Card className={classes.item}>
      <CardContent>
        <Typography className={classes.title}>
          {n.id} {n.title}
        </Typography>
        <Typography component='p' className={classes.pos}>
          Noticias <br />
          {n.content}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size='medium' variant='contained' color='secondary' key={n.id}>
          Ver mas
        </Button>
      </CardActions>
    </Card>
  );
};


export default CardNews;
