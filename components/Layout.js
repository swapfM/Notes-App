import React from "react";
import {Drawer, makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import {List} from "@material-ui/core";
import {ListItem} from "@material-ui/core";
import {ListItemIcon} from "@material-ui/core";
import {ListItemText} from "@material-ui/core";
import {AddCircleOutlineOutlined, SubjectOutlined} from "@material-ui/icons";
import {useHistory, useLocation} from "react-router-dom";
import {AppBar} from "@material-ui/core";
import {Toolbar} from "@material-ui/core";
import { format} from "date-fns";
import {Avatar} from "@material-ui/core";


const drawerWidth = 240

const useStyles = makeStyles((theme) =>{

    return {
        page: {
            background: '#f9f9f9',
            width: '100%',
            padding: theme.spacing(3)
        },

        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },

        active: {
            background: '#f4f4f4'
        },
        title: {
            padding: theme.spacing(2)
        },
        appbar: {
            width: `calc(100% - ${drawerWidth}px)`
        },
        toolbar: theme.mixins.toolbar,

        date: {
            flexGrow: 1
        },
        user: {
            marginLeft: 10
        }

    }

})

function Layout (props){


    const classes = useStyles()
    const history = useHistory()
    const location = useLocation()

    const menuItems = [
        {
            text: 'My Notes',
            icon: <SubjectOutlined  color={"secondary"}/>,
            path: '/'
        },
        {
            text: 'Create Note',
            icon: <AddCircleOutlineOutlined color={"secondary"}/>,
            path: '/Create'
        },
    ]
    return(
        <div className = {classes.root}>

            <AppBar
                className={classes.appbar}
            elevation={0}>
                <Toolbar>
                    <Typography className={classes.date}>
                        Today is the { format(new Date(), 'do MMMM Y')}
                    </Typography>

                    <Avatar src="./img.png" />


                    <Typography className={classes.user}>
                        User
                    </Typography>
                </Toolbar>
            </AppBar>

            <Drawer
                className={classes.drawer}
            variant={"permanent"}
            anchor={"left"}
            classes = {{paper: classes.drawerPaper}}
            >

                <div>
                    <Typography variant={"h5"} className={classes.title}>
                       SwapfM's Notes
                    </Typography>
                </div>

               
            </Drawer>
            <div className={classes.page}>
                <div className={classes.toolbar}></div>
                {props.children}

            </div>
        </div>

    )

}

export default Layout;
