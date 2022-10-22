import { gsap } from "gsap";

const onClick = () => {
    console.log('weee')
    gsap.to(".anim", { rotation: 360, yoyo: true, ease: "bounce-out", repeat: 1})
}

function Results() {
    return (
        <section className="meter">
            <button onClick={onClick} className="anim">Click</button>
        </section>
    );
  }



export default Results