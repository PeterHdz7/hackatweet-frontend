import styles from '../styles/Acceuil.module.css';
import React from "react";
import SignIn from './SignIn';
import SignUp from './SignUp';


function Acceuil() {
  
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.imageContainer}>
        <img src='https://thekashmirwalla.com/wp-content/uploads/2022/08/Twitter.jpg' alt="Background" />
      </div>
      <div className={styles.contentContainer}>
        <h1>See what's happening</h1>
        <p>Join Hackatweet today.</p>
        <SignIn/>
        <p>Already have an account?</p>
        <SignUp/>
        </div>
      </div>
    
  );
}

export default Acceuil;