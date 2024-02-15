import styles from '../styles/Acceuil.module.css';

function Acceuil() {
  return (
    <div className={styles.homepageContainer}>
      <div className={styles.imageContainer}>
        {/* Ajoutez l'URL de votre image en tant que source */}
        <img src='https://thekashmirwalla.com/wp-content/uploads/2022/08/Twitter.jpg' alt="Background" />
      </div>
      <div className={styles.contentContainer}>
        <h1>See what's happening</h1>
        <p>Join Hackatweet today.</p>
        <button>Sign up</button>
        <p>Already have an account?</p>
        <button>Sign in</button>
      </div>


    </div>
  );
};
  

export default Acceuil;
