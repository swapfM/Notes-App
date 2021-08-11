import React, {useEffect, useState} from 'react'
import {Card, Container, Grid, Paper} from "@material-ui/core";
import NoteCard from "../components/NoteCard";
import Masonry from "react-masonry-css"

export default function Notes() {

    const [notes, setNotes] = useState([])


  useEffect(async () => {

      const response = await fetch('http://localhost:3001/notes')

         const data = await response.json();
        setNotes(data)



  },[])

  
    const breakpoints = {
        default: 3,
        1100: 2,
        700: 1
    }

