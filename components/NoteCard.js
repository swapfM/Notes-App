import React from "react";
import {Avatar, Card, IconButton, makeStyles, Typography} from "@material-ui/core";
import {CardHeader} from "@material-ui/core";
import {CardContent} from "@material-ui/core";
import {DeleteOutlined} from "@material-ui/icons";
import {blue, green, pink, yellow} from "@material-ui/core/colors";



function NoteCard(props) {

     const useStyles = makeStyles({

        avatar: {
            backgroundColor: (note) => {
                if(note.Category === 'work')return yellow[700]

                else if(note.Category === 'money')return green[500]

                else if(note.Category === 'todos')return pink[500]

                return blue[500]
            }
        }

    })

    const classes = useStyles(props.note)

    console.log(props.note.Category)
    return (
        <>
            <Card elevation={1}>
                <CardHeader
                    avatar = {
                        <Avatar className={classes.avatar}>
                            {props.note.Category[0].toUpperCase()}
                        </Avatar>
                    }
                    
                     action ={
                    <IconButton onClick={()=> props.deleteHandler(props.note.id)}>
                        <DeleteOutlined/>
                    </IconButton>
                }
                title = {props.note.title}
                subheader={props.note.Category}
                />
                     
                       <CardContent>
                    <Typography variant={"body2"} color={"textSecondary"} >
                        {props.note.details}
                    </Typography>
                </CardContent>


              

            </Card>
        </>
    )
               
   
    
}

export default NoteCard;
