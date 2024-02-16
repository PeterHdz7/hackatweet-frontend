import styles from "../styles/Home.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCircleUser } from "@fortawesome/free-regular-svg-icons";
import LastTweets from "./LastTweets"; //ajout JF

function Home() {
  return (
    <div className={styles.main}>
      <div style={{ flex: 1 }} className={styles.leftSide}>
        <FontAwesomeIcon icon={faTwitter} className={styles.top} />
        <div>
          <div className={styles.bottom}>
            <div className={styles.icone}>
              <FontAwesomeIcon icon={faCircleUser} />
            </div>

            <div>
              <div className={styles.name} >John</div>
              <div>@JohnCena</div>
            </div>
          </div>
          <button className={styles.userSection}>logout</button>
        </div>
      </div>
      <div style={{ flex: 2, border: "1px solid white" }}><LastTweets/></div> 
      {/* Remettre hf */}
      <div style={{ flex: 1 }}>wc</div>
    </div>
  );
}

export default Home;
