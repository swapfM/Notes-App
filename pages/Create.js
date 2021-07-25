import React, {useEffect, useState} from 'react'
import {Card, Container, Grid, Paper} from "@material-ui/core";


export default function Notes() {

    const [notes, setNotes] = useState([])

  useEffect(async () => {

      const response = await fetch('http://localhost:3001/notes')

         const data = await response.json();
        setNotes(data)



  },[])


  return (
    <Container>

    <Grid container>


                {notes.map(note => (
                    <Grid key={note.id} item md={3} xs={12} sm={6}>
                    <Card >{note.title}</Card>
                    </Grid>

                ))}



    </Grid>

    </Container>
  )
}
