import React from 'react'

export default function ListaContactosMensaje(props){

    const id = props.match.params.id
    return(
        <>
            <h1>{id}</h1>
        </>
    )
}