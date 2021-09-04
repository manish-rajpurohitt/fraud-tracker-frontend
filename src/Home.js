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
          <h1>7 Tips to prevent Online Scams</h1>
          <ol>
          <li>Keep your computers and mobile devices up to date. Having the latest security software, web browser, and operating system are the best defenses against viruses, malware, and other online threats. Turn on automatic updates so you receive the newest fixes as they become available.</li>
          <li>Set strong passwords. A strong password is at least eight characters in length and includes a mix of upper and lowercase letters, numbers, and special characters.</li>
          <li>Watch out for phishing scams. Phishing scams use fraudulent emails and websites to trick users into disclosing private account or login information. Do not click on links or open any attachments or pop-up screens from sources you are not familiar with. Forward phishing emails to the Federal Trade Commission (FTC) at spam@uce.gov – and to the company, bank, or organization impersonated in the email.</li>
          <li>Keep personal information personal. Hackers can use social media profiles to figure out your passwords and answer those security questions in the password reset tools. Lock down your privacy settings and avoid posting things like birthdays, addresses, mother’s maiden name, etc. Be wary of requests to connect from people you do not know.</li>
          <li>Secure your internet connection. Always protect your home wireless network with a password. When connecting to public Wi-Fi networks, be cautious about what information you are sending over it.</li>
          <li>Shop safely. Before shopping online, make sure the website uses secure technology. When you are at the checkout screen, verify that the web address begins with https. Also, check to see if a tiny locked padlock symbol appears on the page.</li>
          <li>Read the site’s privacy policies. Though long and complex, privacy policies tell you how the site protects the personal information it collects. If you don’t see or understand a site’s privacy policy, consider doing business elsewhere.</li>
          </ol>
        </div>
      </div>
    );
  }


  export default Home