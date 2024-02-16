import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";
import { useRouter } from 'next/router'

//Exemple d'infos users récupérées et utilisation dans la page Home
function Home() {
  const userInfos = {
    username: "fezf",
    firstname: "pep",
    token: "2nlYNM5Pjt04WEXNPsGxdTAoapzD1fKV",
    isConnected: true,
  };

  // Préparation de la naviguation ci dessous

// if (!etatAChanger){
//   router.push(accueil)
// }

  // const handleLogout = () => {
  //   dispatch(logout());
  // };

  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }} className={styles.leftSide}>
        <Link href="/">
          <FontAwesomeIcon icon={faTwitter} className={styles.top}  />
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
          <button className={styles.userSection} onClick={handleLogout} >logout</button>
        </div>
      </div>
      <div style={{ flex: 2, border: "1px solid white" }}>hf</div>
      <div style={{ flex: 1 }}>wc</div>
    </div>
  );
}

export default Home;
