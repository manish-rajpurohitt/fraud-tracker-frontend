import React from "react";
import { FormControl,Select,Button, MenuItem,TextField, InputLabel, makeStyles } from "@material-ui/core";
import Autocomplete from '@material-ui/lab/Autocomplete';
import validator  from "validator";
import axios from "axios";


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
const initialState = {
    name:"",
    description : "",
    email : "",
    fraudAmount : "",
    phoneNumber : "",
    platform : "",
    scamType : "",
    screenshots : [],
    victimEmail : "",
    website : ""
}
export default function SubmitFraud(){
    const [platform, updatePlatform] = React.useState("");
    const [scamTypes, updateScamTypes] = React.useState([]);
    const [values, updateValues] = React.useState(initialState)
    const fetchScamTypes = async()=>{
        const res = await fetch('http://localhost:3000/getAllScamTypes');
        const json = await res.json();
        if(json?.success){
          return json?.data[0].allscamtypes;
        }
        if(json?.error){
          console.log(json.error);
        }
    }

    React.useEffect(()=>{
        fetchScamTypes().then(response => {
            updateScamTypes(response);
          });
    },[])
    const [selectedFile, setSelectedFile] = React.useState([]);
	const [isFilePicked, setIsFilePicked] = React.useState(false);
    const [uploading, updateUploading] = React.useState({
        count : 0,
        status : false
    });
    const classes = useStyles();
    const handleChange=(event)=>{
        updateValues({...values,platform:event.target.value})
        updatePlatform(event.target.value);
    }

    const changeHandler = (event) => {
		setSelectedFile(event.target.files);
		setIsFilePicked(true);
	};

    const handleValidation = ()=>{
        if(validator.isEmail(values.victimEmail) 
        && validator.isNumeric(values.fraudAmount)
        && !validator.isEmpty(platform) 
        && !validator.isEmpty(values.scamType)
        && !validator.isEmpty(values.description) ){
            return true;
        }else{
            return false;
        }
    }
    const checkAndAddScam = ()=>{
        if(uploading.count === selectedFile.length){
            updateUploading({...uploading,status:false})
            axios({
                method: 'post',
                url: "http://localhost:3000/addScam",
                headers: {}, 
                data: {
                  values
                }
              });
              window.location.reload();
        }else{
            updateUploading({...uploading,status:true})
        }
    }
    const uploadImage = ()=>{
        for (let i = 0; i < selectedFile.length; i++) {
            const data = new FormData() 
            data.append('file', selectedFile[i]);
            axios.post("https://online-fraud-tracker.herokuapp.com/upload", data, { // receive two parameter endpoint url ,form data 
            })
            .then(res => { // then print response status
                let screens = values.screenshots;
                screens.push(res?.data?.url);
                updateValues({...values, screenshots:screens});
            }).then(()=>{
                updateUploading({...uploading,count:uploading.count++});
                checkAndAddScam();
            })
        }
    }


    const handleSubmit = ()=>{
        updateUploading({...uploading,status:true})
        if(handleValidation()){
            if(isFilePicked){
                uploadImage();
            }else{
                checkAndAddScam();
            }
        }else{
            console.log("validation error")
            updateUploading({...uploading,status:false})
        }
    }


      return(
        <>
        <div className="SubmitFraud">
        <h3>Submit a fraud activity</h3>
        <p>Please fill out the information for the best of your knowledge</p>
            <FormControl className={classes.formControl}>
                <div className="form-control-sub">
                <div className="subFraud-control1">
                <InputLabel required={true} id="demo-simple-select-label">Select Platform :</InputLabel>
                <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={platform}
                onChange={handleChange}
                required={true}
                >
                <MenuItem value={'instagram'}>Instagram</MenuItem>
                <MenuItem value={'whatsapp'}>Whatsapp</MenuItem>
                <MenuItem value={'fakewebsite'}>Fake Website</MenuItem>
                <MenuItem value={'telegram'}>Telegram</MenuItem>
                </Select>
                <TextField id="standard-basic" required={true} value={values.name} onChange={(e)=>updateValues({...values,name:e.target.value})} label="BusinessName/Username" />
                <TextField
                    id="outlined-multiline-flexible"
                    label="Fraud Description:"
                    multiline
                    required={true}
                    style={{marginTop:"10px"}}
                    maxRows={4}
                    value={values.description}
                    onChange={(e)=>updateValues({...values, description:e.target.value})}
                    variant="outlined"
                    />
                <TextField id="standard-basic" type="number" value={values.phoneNumber} onChange={(e)=>{updateValues({...values,phoneNumber :e.target.value})}} label="Scammer PhoneNumber:" />
                <TextField id="standard-basic" value={values.email} onChange={(e)=>{updateValues({...values,email:e.target.value})}} label="Scammer Email:" />
                <p></p>
                <Autocomplete
                    id="combo-box-demo"
                    onChange={(e,val)=>updateValues({...values,  scamType:val})}
                    options={scamTypes}
                    getOptionLabel={(option) => option}
                    style={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} required={true} label="ScamType"  variant="outlined" />}
                />
                <span>Ex: netflix-subscription, shopping-fraud, etc</span>
                </div>
                <div className="subFraud-control2">
                <TextField id="standard-basic" value={values.fraudAmount} required={true} onChange={(e)=>{updateValues({...values,fraudAmount:e.target.value})}} label="Fraud Amount:" />
                <TextField id="standard-basic" value={values.website} onChange={(e)=>{updateValues({...values,website:e.target.value})}} label="Website:" />
                <TextField id="standard-basic"  value={values.victimEmail} required={true} onChange={(e)=>{updateValues({...values,victimEmail:e.target.value})}} label="Your Email:" />
                <span>We won't spam or share your email with anyone!!</span>
                <p>Please attach screenshots if possible!!</p>
                <input type="file"multiple  accept="image/*" name="file"  onChange={changeHandler} />
                <div className="sub-btn">
                <Button type="reset" disabled={uploading.status? true : false} variant="contained" onClick={()=>{updateValues(initialState)}} >Reset</Button>
                </div>
                <Button type="submit" disabled={uploading.status? true : false} variant="contained" color="primary" onClick={handleSubmit} style={{marginTop:"10px"}} >Submit</Button>
            </div>
            </div>
            </FormControl>
        </div>
        </>
    )
}