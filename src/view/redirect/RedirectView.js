import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

const RedirectView = () => {

    const history = useHistory();

    return (
        <div>
            <Typography variant="h1" color="initial">
                Debe estar logeado para entrar al backoffice
            </Typography>
            <Button onClick={() => history.replace('/')} variant="outlined" color="primary">
                Volver
            </Button>
        </div>
    )
}

export default RedirectView
