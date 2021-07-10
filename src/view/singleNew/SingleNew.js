import React, { useEffect, useState } from 'react';
import { makeGET } from 'services/httpRequest';
import { ENDPOINT_NEWS } from 'services/settings';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const SingleNew = ({ id }) => {
  const [entry, setEntry] = useState(null);

  const useStyles = makeStyles({
    root: {
      width: '80%',
      height: 'auto',
    },
    container: {
      marginTop: '20px',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    media: {
      height: 400,
      minWidth: 100,
      maxWidth: '100%',
    },
  });

  useEffect(() => {
    makeGET(`${ENDPOINT_NEWS}/${id}`).then((res) =>
      setEntry(res['newsDetail']),
    );
  }, [id]);

  const classes = useStyles();

  return (
    <>
      {entry && (
        <div className={classes.container}>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={entry.image}
                title='Contemplative Reptile'
              />
              <CardContent>
                <Typography gutterBottom variant='h2' component='h2'>
                  {entry.name}
                </Typography>
                <Typography variant='h5' color='textSecondary' component='p'>
                  {entry.content}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </div>
      )}
    </>
  );
};

export default SingleNew;
