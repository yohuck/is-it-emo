import { gsap } from "gsap";

let toggle = false;

const onClick = () => {
    if (toggle){
        gsap.to(".pointer", { rotation: 60, ease: "bounce-out"})
        gsap.to(".meter-body-left", { backgroundColor: 'var(--red-6)'})
        gsap.to(".meter-body-right", { backgroundColor: 'var(--red-6)'})
        toggle = !toggle
    } else {
        gsap.to(".pointer", { rotation: -60, ease: "bounce-out"})
        gsap.to(".meter-body-left", { backgroundColor: 'var(--green-6)'})
        gsap.to(".meter-body-right", { backgroundColor: 'var(--green-6)'})
        toggle = !toggle
    
}
}

function Results() {
    return (

            <div className="con">
                <section className="meter relative">
                    <div className="meter-body-left">
                        <div className="meter-pointer"></div>
                    </div>
                    <div className="meter-body-right">
                        <div className="meter-pointer"></div>
                    </div>
                    <div className="pointer"></div>
                </section>
                <button onClick={onClick}>Click</button>
            </div>
    );
  }



export default Results