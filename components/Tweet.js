import React from 'react'
import styles from "../styles/Tweets.module.css";


export default function Tweet(props) {
  
function calcTimeGap (dateToTest)
{
    const dateRef = new Date(dateToTest);
    const currentDate = new Date();
    const diffInMs = currentDate - dateRef;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInMinutes < 60) {
    return (diffInMinutes + "min");
    } else if (diffInMinutes < 24 * 60) {
    const diffInHours = Math.floor(diffInMinutes / 60);
    return (diffInHours + " heure(s)");
    } else {
    const diffInDays = Math.floor(diffInMinutes / (60 * 24));
    return (diffInDays + " jour(s)");
    }
}

const dateDiff = calcTimeGap(props.data.date)
  
return (
<div className={styles.container}>

    <div className={styles.info}>
        <img src='/avatar.png' className={styles.icon} />
        <span className={styles.user}>{props.data.username.firstname}</span>
        <span className={styles.id}>{props.data.username.username} {dateDiff}</span>
    </div>

    <div className={styles.tweet}>
        <p>{props.data.content}</p>
    </div>

</div>

  )
}
