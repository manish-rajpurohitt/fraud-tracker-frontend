import React from 'react';
import SubmitFraud from './SubmitFraud';
import SearchFraud from './SearchFraud';
import { Link } from 'react-router-dom';
import {Button} from '@material-ui/core';

 function Home() {
    const [searchFraud, updateSearchFraud] = React.useState(false);
    return (
      <div className="App">
        <h1>Online Fraud/ Scam Tracker</h1>
        <p>This is a website where you can submit a fraud activity according to top 4 platforms Instagram, Whatsapp, Telegram and Shopping websites to aware users.</p>
        <p>Now is your chance to share your story to help warn others. Please describe your experience, including any additional information about the scammer, the product or service offered, and the tactics the scammer used.</p>
        <div>
        <div className="button-home">
          <Button variant="contained" color="primary">
        <Link to="/SearchFraud">Search Scams</Link>
          </Button>
          <Button variant="contained" color="primary">
          <Link to="/SubmitFraud">Submit a Scam</Link>
            </Button>
        </div>
        <img src="/temp.png" width="300px" />

        </div>
      </div>
    );
  }


  export default Home