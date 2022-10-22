import { gsap, Bounce, Elastic } from "gsap";

let toggle = false;



const onClick = () => {
    if (toggle){
        gsap.to(".pointer", { rotation: 60, ease:Bounce.easeOut})
        gsap.to(".meter-body-left", 1, { backgroundColor: '#EA7179'})
        gsap.to(".meter-body-right",1, { backgroundColor: '#EA7179'})
        toggle = !toggle
    } else {
        gsap.to(".pointer", { rotation: -60, ease:Bounce.easeOut})
        gsap.to(".meter-body-left",1, { backgroundColor: '#F5CCE8'})
        gsap.to(".meter-body-right", 1,{ backgroundColor: '#F5CCE8'})
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
                    <button onClick={onClick} className="meter-button clip">Is it Emo?</button>

                </section>
            </div>
    );
  }



export default Results