import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
<<<<<<< HEAD
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../reducers/user";
import { useEffect } from "react";
=======
import LastTweets from "./LastTweets"; //ajout JF
>>>>>>> second

function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector((state) => state.user.value);
  //Exemple d'infos users récupérées et utilisation dans la page Home
  const userInfos = {
    username: "fezf",
    firstname: "pep",
    token: "2nlYNM5Pjt04WEXNPsGxdTAoapzD1fKV",
    isConnected: true,
  };

  // Redirrection de l'utilisateur s'il n'a pas de token

  useEffect(() => {
    if (!user.isConnected) router.push("/");
  }, [user]);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }} className={styles.leftSide}>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} className={styles.top} />
        </Link>

        <div>
          <div className={styles.bottom}>
            <div className={styles.icone}>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>

            <div>
              <div className={styles.name}>{userInfos.username}</div>
              <div>@{userInfos.firstname} </div>
            </div>
          </div>
          <button className={styles.userSection} onClick={handleLogout}>
            logout
          </button>
        </div>
      </div>
      <div style={{ flex: 2, border: "1px solid white" }}><LastTweets/></div> 
      {/* Remettre hf */}
      <div style={{ flex: 1 }}>wc</div>
    </div>
  );
}

export default Home;
