import styles from "../styles/Acceuil.module.css";
import { Button, Modal } from "antd";
import { login, logout } from "../reducers/user";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
function SignUp() {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [signUpUsername, setSignUpUsername] = useState("");
  const [signUpFirstname, setSignUpFirstname] = useState("");
  const [signUpPassword, setSignUpPassword] = useState("");

  const showModal = () => {
    setOpen(true);
  };

  const handleRegister = () => {
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: signUpUsername,
        firstname: signUpFirstname,
        password: signUpPassword,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({ username: signUpUsername, firstname: signUpFirstname })
          );
          setSignUpUsername("");
          setSignUpPassword("");
          setSignUpFirstname("");
          setOpen(false);
        }
      });
  };
  const user = useSelector((state) => state.user.value);

  console.log("Etat", user);
  const handleCancel = (e) => {
    console.log(e);
    setOpen(false);
  };

  return (
    <div className={styles.buttonContainer}>
      <Button type="primary" onClick={showModal}>
        Sign up
      </Button>
      <Modal
        title="Create your Hackatweet account"
        open={open}
        okText="Sign up"
        onOk={handleRegister}
        onCancel={handleCancel}
        cancelButtonProps={{
          disabled: true,
        }}
      >
        <div className={styles.columnContainer}>
          <input
            type="text"
            placeholder="Firstname"
            id="signUpFirstname"
            onChange={(e) => setSignUpFirstname(e.target.value)}
            value={signUpFirstname}
          ></input>
          <input
            type="text"
            placeholder="Username"
            id="signUpUsername"
            onChange={(e) => setSignUpUsername(e.target.value)}
            value={signUpUsername}
          ></input>
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setSignUpPassword(e.target.value)}
            value={signUpPassword}
          ></input>
        </div>
      </Modal>
    </div>
  );
}

export default SignUp;
