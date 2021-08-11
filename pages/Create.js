import React, {useState} from 'react'
import Typography from "@material-ui/core/Typography";
import {Button, FormControlLabel, RadioGroup} from "@material-ui/core";
import {Container} from "@material-ui/core";
import {Category, KeyboardArrowRight} from "@material-ui/icons";
import { makeStyles } from "@material-ui/core";
import {TextField} from "@material-ui/core";
import {Radio} from "@material-ui/core";
import {FormLabel} from "@material-ui/core";
import {FormControl} from "@material-ui/core";
import {useHistory} from 'react-router-dom';



const useStyles = makeStyles({

    field: {
        marginTop: 20,
        marginBottom: 20,
        display: 'block'
    }

});

export default function Create() {

    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [details, setDetails] = useState('')
    const [titleerr, setTitleerr] = useState(false)
    const [detailserr, setDetailserr] = useState(false)
    const [Category, setCategory] = useState('todos')
    const history  = useHistory()



    const handleSubmit = async (e)=> {
        e.preventDefault();

        if (title && details) {
            setTitleerr(false)
            setDetailserr(false)

            await fetch('http://localhost:3001/notes', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({title, details, Category})


            })
           await( history.push("/"))



        }
        else {
            if (!title) setTitleerr(true)
            if (!details) setDetailserr(true)
        }

    }

 


    </Container>
  )
}
