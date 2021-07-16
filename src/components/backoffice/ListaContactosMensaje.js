import React from 'react'
import { useParams } from 'react-router-dom';

export default function ListaContactosMensaje(){

    const {message} = useParams();

    return(
        <>
            <h3>Mensaje:</h3>
            <p> {message} </p>
        </>
    )
}