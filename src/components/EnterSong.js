import Results from './Results'
import axios from 'axios'
import { useEffect, useState } from 'react'
const {REACT_APP_MUSIX_MATCH_KEY, REACT_APP_ONE_AI_KEY } = process.env




let pullSong = (e) => {
  e.preventDefault()
  const song = document.getElementById('song').value.trim()
  console.log(e, song)
}

function EnterSong () {
  const [string, setString] = useState('')
  const [emotion, setEmotion] = useState('')

useEffect(() => {
  const axios = require("axios");
  const config = { 
    method: "POST", 
    url: "https://api.oneai.com/api/v0/pipeline",
    headers: { 
      "api-key":REACT_APP_ONE_AI_KEY, 
      "Content-Type": "application/json",
    },
    data: {
      input: "There are things that used to make me smile\nOne of them was you for just a little while\nYou left me for dead, so far away\nI replaced you with fear and shame\nYou'll be happy on the day I die\nThere are things that used to make me laugh\nBut now they're deeply buried in the past\nI left them there, so far away\nReplaced my humor with my pain\nI'll be happy on the day it dies\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said\nThere are things that used to make you cry\nOne of them was me for just a little while\nWhy is it that you had to say\nGoodbye in your special way?\nYou slashed the tires on my car\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said",
      // input: "Your lipstick, his collar\nDon't bother, angel\nI know exactly what goes on\nWhen everything you'll get is everything that you've wanted, princess\n(Well, which would you prefer?)\nMy finger on the trigger, or\n(Me face down, down across your floor?)\nMe face down, dead across your floor\n(Me face down, down across your floor)\nWell, just so long as this thing's loaded\nAnd will you tell all your friends\nYou've got your gun to my head?\nThis all was only wishful thinking\nThis all was only wishful thinking\nAnd will you tell all your friends\nYou've got your gun to my head?\nThis all was only wishful thinking\nThis all was only wishful thinking\nLet's go\nDon't bother trying to explain, angel\nI know exactly what goes on when you're on, and\nHow 'bout I'm outside of your window?\n(Well, how 'bout I'm outside of your window)\nWatching him keep the details covered\nYou're such a sucker for a sweet talker, yeah\n(You're such a sucker)\nAnd will you tell all your friends\nYou've got your gun to my head?\nThis all was only wishful thinking\nThis all was only wishful thinking\nAnd will you tell all your friends (the only thing)\nYou've got your gun to my head? (I regret)\nThis all was only wishful thinking (is that I)\nThis all was only wishful thinking (I never let you hold me back)\nHoping for the best just hoping nothing happens\nA thousand clever lines unread on clever napkins\nI will never ask if you don't ever tell me\nI know you well enough to know you'll never love me\nHoping for the best just hoping nothing happens (why can't I feel anything)\nA thousand clever lines unread on clever napkins\nI will never ask if you don't ever tell me (from anyone other than you?)\nI know you well enough to know you'll never love me\nHoping for the best just hoping nothing happens (why can't I feel anything)\nA thousand clever lines unread on clever napkins\nI will never ask if you don't ever tell me (from anyone other than you?)\nI know you well enough to know\nAnd all of this was all your fault\nAnd all of this\n(It makes things worse)\nI stay wrecked and jealous for this\nFor this simple reason I\nJust need to keep you in mind\nAs something larger than life\nI stay wrecked and jealous for this (she'll destroy us all before she's through)\nFor this simple reason I\nJust need to keep you in mind (and find a way to blame somebody else)\nAs something larger than life\nI stay wrecked and jealous for this (she'll destroy us all before she's through)\nFor this simple reason I\nJust need to keep you in mind (and find a way to blame somebody else)",
      input_type: "article",
      content_type: "application/json",
      steps: [
        {
          skill: "summarize"
        },
        {
          skill: "emotions"
        }
      ],
    },
};
axios(config)
  .then((response) => {
    console.log(response.data.output[0].text)
    const emotion = response.data.output[0].labels[0].name
    const span = response.data.output[0].labels[0].span_text

    setString(span)
    setEmotion(emotion)

    console.log(emotion, span)
  })
  .catch((error) => {
    console.log(error);
});
      }, [])

   



  // useEffect(() => {
  //   axios(`https://www.stands4.com/services/v2/lyrics.php?uid=1001&tokenid=tk324324&term=forever%20young&artist=Alphaville&format=xml`)
  //   .then(response => {
  //     console.log(response)
  //   }).catch((err) => console.log(err))
  // }, [])

    return (
 
        <div className="container">
          <section>
            <form>
              <label for="song">Enter a song</label>
              <input type="text" name="song" id="song"></input>
              <button type='submit' id='submit' className='clip' onClick={pullSong}>Is it Emo?</button>
            </form>
          </section>
          <Results emotion={emotion} string={string} />
        </div>
    );
  }

  export default EnterSong