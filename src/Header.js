import { Button, Toolbar, IconButton, Typography, makeStyles, AppBar } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    title: {
      flexGrow: 1
    },
  }));

export default function Header(){
     const classes = useStyles();

    return(
        <><nav>
            <AppBar position="static">
            <Toolbar>
                <Link to="/" variant="h6" underLineNone className={classes.title}>
                <h1>Online Fraud/Scam Tracker</h1>
                </Link>
                <Link to="/"><Button color="inherit"><h3>Home</h3></Button></Link>
                <Link to="/SearchFraud"><Button color="inherit"><h3>Search Fraud activities</h3></Button></Link>
                <Link to="/SubmitFraud"><Button color="inherit"><h3>Submit a Fraud activity</h3></Button></Link>

            </Toolbar>
            </AppBar>
        
    </nav></>
    )
}