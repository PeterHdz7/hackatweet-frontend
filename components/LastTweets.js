import styles from "../styles/LastTweets.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { useEffect, useState } from "react";
import Tweet from "./Tweet";


function LastTweets() {
    
    const[triggerList,setTriggerList] = useState(false)
    const[tweetsList,setTweetsList] = useState([])
    const[inputText, setInputText] = useState('');

    //Appel route pour récupérer les Tweets de la BDD
    useEffect(() => {
        fetch('http://localhost:3000/tweets/displayTweetList')
          .then(response => response.json())
          .then(data => setTweetsList(data.data))
          .catch(error => console.error('Error fetching tweet data:', error));
      }, [triggerList]);

    console.log('ETAT',tweetsList);
    
    const tweetItems = tweetsList.map(tweet => {
        return <Tweet className = {styles.default} data = {tweet}/>
    })

    console.table('Contenu COmponent:',tweetItems)

    //Enregistrement du tweet lors du clic sur le bouton
    const handleAddButton = () => {
        console.log(inputText)
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        const urlencoded = new URLSearchParams();
        urlencoded.append("username", "65cdf4684824f38350ec3377");
        urlencoded.append("content", inputText);

        const requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
        };

        fetch('http://localhost:3000/tweets/newTweet',requestOptions)
          .then(response => 
            {
                if (!response.ok) 
                {
                    throw new Error('Erreur lors de la requête.');
                }
                setTriggerList(!triggerList)
                return response.json();
            })
            .catch(error => {
            console.error('Erreur:', error);
            // Gérer l'erreur ici, par exemple afficher un message à l'utilisateur
            });
          
        }

    return (
      <>
        <div className={styles.layout}>
            <div className = {styles.default}>Home</div>
            <input type='text' placeholder="Type your tweet here"
            onChange={(e) => setInputText(e.target.value)} 
            value={inputText} />
            <div className = {styles.default}>
            <span>X/TOTAL</span>
            <button 
            className = {styles.buttonTweet} onClick = {() => handleAddButton()}>Tweet</button>
            </div>
        </div>
        <div className= {styles.tweetsContainer}>
            {tweetItems}
        </div>
      </>
    );
  }

  export default LastTweets;