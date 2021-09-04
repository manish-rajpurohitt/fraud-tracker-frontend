import React from "react";
import { FormControl,Select,Button, MenuItem,TextField, InputLabel, makeStyles } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          width: '25ch',
        },
      },
  }));

export default function SubmitFraud(){
    const [platform, updatePlatform] = React.useState("");
    const classes = useStyles();
    const handleChange=(event)=>{
        updatePlatform(event.target.value)
    }
    return(
        <>
        <div className="SubmitFraud">
        <h3>Submit a fraud activity</h3>
        <p>Please fill out the information for the best of your knowledge</p>
            <FormControl className={classes.formControl}>
                <div className="form-control-sub">
                <div className="subFraud-control1">
                <InputLabel id="demo-simple-select-label">Select Platform :</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={platform}
                onChange={handleChange}
                >
                <MenuItem value={'instagram'}>Instagram</MenuItem>
                <MenuItem value={'whatsapp'}>Whatsapp</MenuItem>
                <MenuItem value={'fakewebsite'}>Fake Website</MenuItem>
                <MenuItem value={'telegram'}>Telegram</MenuItem>
                </Select>
                <TextField id="standard-basic" label="BusinessName/Username" />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Fraud Description:"
                    multiline
                    style={{marginTop:"10px"}}
                    maxRows={4}
                    value={""}
                    onChange={handleChange}
                    variant="outlined"
                    />
                <TextField id="standard-basic" label="Scammer PhoneNumber:" />
                <TextField id="standard-basic" label="Scammer Email:" />
                <TextField id="standard-basic" label="Scamm Type:" />
                <span>Ex: netflix-subscription, shopping-fraud, etc</span>
                </div>
                <div className="subFraud-control2">
                <TextField id="standard-basic" label="Fraud Amount:" />

                <TextField id="standard-basic" label="Website:" />
                <TextField id="standard-basic" label="Your Email:" />
                <span>We won't spam or share your email with anyone!!</span>
                <p>Please attach screenshots if possible!!</p>
                <div className="form-group">
                    <input type="file" multiple/>
                </div>
                <div className="sub-btn">
                <Button type="reset" variant="contained" >Reset</Button>
                </div>
                <Button type="submit" variant="contained" color="primary" style={{marginTop:"10px"}} >Submit</Button>

            </div>
            </div>
            </FormControl>
        </div>
        </>
    )
}