import Results from "./Results";
import { gsap, Bounce, Elastic } from "gsap";

import axios from "axios";
import { useEffect, useState } from "react";
const {
  REACT_APP_MUSIX_MATCH_KEY,
  REACT_APP_ONE_AI_KEY,
  REACT_APP_STANDS4_USER_ID,
  REACT_APP_STANDS4_TOKEN,
} = process.env;

const lyricsURL = `https://www.stands4.com/services/v2/lyrics.php?uid=${REACT_APP_STANDS4_USER_ID}&tokenid=${REACT_APP_STANDS4_TOKEN}&term=stupid%20kid&format=JSON`;

console.log(lyricsURL);

let toggle = false;

const onClick = () => {
  if (toggle) {
    gsap.to(".pointer", { rotation: 0, ease: Bounce.easeOut, duration: 2 });
    gsap.to(".meter-body-left", 1, { backgroundColor: "#FF69B4" });
    gsap.to(".meter-body-right", 1, { backgroundColor: "#FF69B4" });
    setTimeout(() => {
      gsap.to(".pointer", {
        rotation: 60,
        ease: Elastic.easeInOut,
        duration: 5,
      });
    }, 2000);
    toggle = !toggle;
  } else {
    gsap.to(".pointer", { rotation: 0, ease: Bounce.easeOut, duration: 2 });
    setTimeout(() => {
      gsap.to(".pointer", {
        rotation: -60,
        ease: Elastic.easeInOut,
        duration: 5,
      });
    }, 2000);
    gsap.to(".meter-body-left", 1, { backgroundColor: "#F5CCE8" });
    gsap.to(".meter-body-right", 1, { backgroundColor: "#F5CCE8" });
    toggle = !toggle;
  }
};

let pullSong = (e) => {
  e.preventDefault();
  const song = document.getElementById("song").value.trim();
  console.log(e, song);
};

function EnterSong() {
  const [string, setString] = useState("");
  const [emotion, setEmotion] = useState("");

  useEffect(() => {
    const axios = require("axios");
    const config = {
      method: "POST",
      url: "https://api.oneai.com/api/v0/pipeline",
      headers: {
        "api-key": REACT_APP_ONE_AI_KEY,
        "Content-Type": "application/json",
      },
      data: {
        input:
          "There are things that used to make me smile\nOne of them was you for just a little while\nYou left me for dead, so far away\nI replaced you with fear and shame\nYou'll be happy on the day I die\nThere are things that used to make me laugh\nBut now they're deeply buried in the past\nI left them there, so far away\nReplaced my humor with my pain\nI'll be happy on the day it dies\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said\nThere are things that used to make you cry\nOne of them was me for just a little while\nWhy is it that you had to say\nGoodbye in your special way?\nYou slashed the tires on my car\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said\nRemember when I said I love you?\nWell, forget it, I take it back\nI was just a stupid kid back then\nI take back every word that I said",
        input_type: "article",
        content_type: "application/json",
        steps: [
          {
            skill: "summarize",
          },
          {
            skill: "emotions",
          },
        ],
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data.output[0].text);
        const emotion = response.data.output[0].labels[0].name;
        const span = response.data.output[0].labels[0].span_text;

        setString(span);
        setEmotion(emotion);

        console.log(emotion, span);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // useEffect(() => {
  //   axios(`https://www.stands4.com/services/v2/lyrics.php?uid=1001&tokenid=tk324324&term=forever%20young&artist=Alphaville&format=xml`)
  //   .then(response => {
  //     console.log(response)
  //   }).catch((err) => console.log(err))
  // }, [])

  return (
    <div className="container">
      <section>
        <div className="con">
          <form>
            <label for="song">Enter a song</label>
            <input type="text" name="song" id="song"></input>
            {/* <button type='submit' id='submit' className='clip' onClick={pullSong}>Is it Emo?</button> */}
          </form>
          <section className="meter relative">
            <div className="meter-body-left">
              <div className="meter-pointer"></div>
            </div>
            <div className="meter-body-right">
              <div className="meter-pointer"></div>
            </div>
            <div className="pointer"></div>
            <button onClick={onClick} className="meter-button clip">
              Is it Emo?
            </button>
          </section>
        </div>

        {/* <Results emotion={emotion} string={string} /> */}
      </section>
      <section></section>
    </div>
  );
}

export default EnterSong;
