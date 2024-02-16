import styles from '../styles/Acceuil.module.css';
import React, { useState } from "react";
import { Button, Modal } from "antd";
import { login, logout } from '../reducers/user';
import { UseSelector, useDispatch } from 'react-redux';

function Acceuil() {

  const dispatch = useDispatch();

  const [open, setOpen] = useState(true);
  const[signUpUsername, setSignUpUsername] = useState('')
  const[signUpFirstname, setSignUpFirstname] = useState('')
  const[signUpPassword, setSignUpPassword] = useState('')
  const showModal = () => {
    setOpen(true);
  };

  const handleRegister = () => {
		fetch('http://localhost:3000/users/signup', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ username: signUpUsername, firstname: signUpFirstname ,password: signUpPassword }),
		}).then(response => response.json())
			.then(data => {
				if (data.result) {
					dispatch(login({ username: signUpUsername, firstname: signUpFirstname, token: data.token }));
					setSignUpUsername('');
					setSignUpPassword('');
          setSignUpFirstname('');
					setIsModalVisible(false)
				}
			});
	};

  
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
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
            visible={open}
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
        <p>Already have an account?</p>
        <button>Sign in</button>
      </div>
    </div>
  );
}

export default Acceuil;