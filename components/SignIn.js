import styles from "../styles/Acceuil.module.css";
import { Button, Modal } from "antd";
import { login, logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Link from 'next/link';
import { useRouter } from "next/router";
function SignIn() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [signInUsername, setSignInUsername] = useState("");
  const [signInFirstname, setSignInFirstname] = useState("");
  const [signInPassword, setSignInPassword] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  
  const handleLogin = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signInUsername,
        password: signInPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {

          dispatch(
            login({ username: signInUsername, firstname: signInFirstname })
          );
          setSignInUsername("");
          setSignInPassword("");
          setSignInFirstname("");
          setOpen(false);
        }
      });
  };
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };
const user = useSelector(state => state.user.value);
console.log('newUser', user);

useEffect(() => {
    if (user.isConnected){ router.push('/home')};
}, [user])

  return (
    <div className={styles.buttonContainer}>
      {" "}
      <Button type="primary" onClick={showModal}>
        Sign in
      </Button>
     
      <Modal
        title="Create your Hackatweet account"
        open={open}
        okText="Sign in"
        onOk={handleLogin}
        onCancel={handleCancel}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <div className={styles.columnContainer}>
          <input
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignInUsername(e.target.value)}
            value={signInUsername}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setSignInPassword(e.target.value)}
            value={signInPassword}
          ></input>
        </div>
      </Modal>  

    </div>
  );
}

export default SignIn;
