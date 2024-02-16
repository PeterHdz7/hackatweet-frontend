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
        <div className={styles.buttonContainer}>
          <Button type="primary" onClick={showModal}>
            Sign up
          </Button>
          <Modal
            title="Create your Hackatweet account"
            open={open}
            onOk={handleRegister}
            onCancel={handleCancel}
            okButtonProps={{
              disabled: true,
            }}
            cancelButtonProps={{
              disabled: true,
            }}
          >
            <div className={styles.columnContainer}>
              <input  type="text" placeholder='Firstname' id='signUpFirstname' onChange={(e) => setSignUpFirstname(e.target.value)} value={signUpFirstname}></input>
              <input  type="text" placeholder='Username'id='signUpUsername' onChange={(e) => setSignUpUsername(e.target.value)} value={signUpUsername}></input>
              <input type="password" placeholder="Password"  onChange={(e) => setSignUpPassword(e.target.value)} value={signUpPassword} ></input>
              
            </div>
          </Modal>
        </div>
        <SignIn/>
        <p>Already have an account?</p>
        <SignUp/>
        </div>
      </div>
    
  );
}

export default Acceuil;