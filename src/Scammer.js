import React from "react";
import {Card, CardContent, CardMedia, CardActions,IconButton,Collapse,Typography, makeStyles } from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import clsx from 'clsx';
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";


const useStyles = makeStyles((theme) => ({
    root: {
        padding:"15px",
        border:"solid black",
        marginRight:"10px"
    },
    media: {
      paddingTop: '120.25%', // 16:9
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));

export default function Scammer(props){
    const [expanded, setExpanded] = React.useState(false);
    const [scexpanded, setScExpanded] = React.useState(false);
    const classes = useStyles();

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    const handleScExpandClick = ()=>{
        setScExpanded(!scexpanded);
    }
    return (<div className="list">
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h5"><span className="item">Name: </span>{props.scamDetails.name}</Typography>
                <Typography variant="h6"><span className="item">Scam Type: </span>{props.scamDetails.scamType}</Typography>
                <Typography variant="subtitle1"><span className="item">Platform: </span>{props.scamDetails.platform}</Typography>
                
                <Typography variant="subtitle1"><span className="item">Amount: </span>{props.scamDetails.fraudAmount}/-</Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton
                    className={clsx(classes.expand, {
                      [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon />
                </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography><span className="item">Description: </span><span>{props.scamDetails.description}</span></Typography>
                    {props.scamDetails.phoneNumber ? <Typography><span className="item">Phone Number: </span><span>{props.scamDetails.phoneNumber}</span></Typography>:""}
                    {props.scamDetails.email ? <Typography><span className="item">Email: </span><span>{props.scamDetails.email}</span></Typography>:""}
                    {(props.scamDetails.screenshots.length >0) ?(<><CardActions disableSpacing>
                        <span className="item">Screenshots :</span>
                        <IconButton
                            className={clsx(classes.expand, {
                            [classes.expandOpen]: scexpanded,
                            })}
                            onClick={handleScExpandClick}
                            aria-expanded={scexpanded}
                            aria-label="show more"
                        >
                            <ExpandMoreIcon />
                        </IconButton>
                    </CardActions>
                    <Collapse in={scexpanded} timeout="auto" unmountOnExit>
                    {props.scamDetails.screenshots.map(screenshot=>{
                        return(
                            <CardMedia
                            className={classes.media}
                            image={"https://drive.google.com/uc?id="+screenshot}
                            title="Paella dish"
                            />
                        )
                    })}
                    </Collapse></>) : ""}
                </CardContent>
            </Collapse>
        </Card>
        </div>
    )
}