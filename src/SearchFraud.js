import React from "react";
import { FormControl,InputLabel, MenuItem, Select, TextField, Button, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    }
  }));

export default function SearchFraud(){

    const [platform, updatePlatform] = React.useState("");
    const classes = useStyles();
    const handleChange=(event)=>{
        updatePlatform(event.target.value)
    }
    return (
    <div className="SearchFraud">
            <h3>Search for Fraud/Scam</h3>
            <div className="search-fraud-container">
            <div className="form-cotrol">
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Select Platform :</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={platform}
                onChange={handleChange}
                >
                    <MenuItem value={'all'}>All</MenuItem>
                <MenuItem value={'instagram'}>Instagram</MenuItem>
                <MenuItem value={'whatsapp'}>Whatsapp</MenuItem>
                <MenuItem value={'fakewebsite'}>Fake Website</MenuItem>
                <MenuItem value={'telegram'}>Telegram</MenuItem>
                </Select>
                <TextField id="standard-basic" label="Keywords with space:" />
                <TextField id="standard-basic" label="Scammer PhoneNumber:" />
                <TextField id="standard-basic" label="Scammer Email:" />
                <TextField id="standard-basic" label="Scam Type:" />
                <span>Ex: netflix-subscription, shopping-fraud, etc</span>
                <TextField id="standard-basic" label="Fraud Amount:" />
                <TextField id="standard-basic" label="Website:" />
                <Button type="submit" variant="contained" color="primary" style={{marginTop:"10px"}} >Submit</Button>
            </FormControl>
            </div>
            <div className="scams-list">

            </div>
            </div>
    </div>)
}