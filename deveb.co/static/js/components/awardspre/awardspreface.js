import React, { useLayoutEffect,useRef } from "react"
import gsap from "gsap"
import {useAppContext} from "../../contexts/appcontext.js";
const AwardsPreface= ()=>{
const el = useRef();
const q = gsap.utils.selector(el);
const moveTl = useRef();
const emoTL = useRef();
const { isMobile, pointer } = useAppContext();


    const handleMove = (ev)=>{
        if(isMobile) return;
        const parent = el.current;
        // console.log((ev.clientX, ev ))
       const valX =(ev.clientX/el.current.getBoundingClientRect().width -.5 );
       const valY =((ev.clientY/el.current.getBoundingClientRect().height -.5 ))
       gsap.to(q(".emoji-wrap"),{
            x:()=> -valX * 40,
            y:()=> -valY * 48,
            duration:1,
            ease:"power2.out"
        })
        gsap.to(q(".text-wrap p"),{
            x: -valX * 40,
            y: -valY * 27,
            rotateY:valX * 5 ,
            duration:1,
            ease:"power2.out"
        })
    }
    const handleLeave=()=>{
        gsap.to(q(".emoji-wrap"),{
            x: 0,
            y: 0,
            duration:1,
            ease:"power2.out"
        })
        gsap.to(q(".text-wrap p"),{
            x: 0,
            y: 0,
            rotateY:0,
            duration:1,
            ease:"power2.out"
        })
    }
    const emojiMove= (em)=>{
        console.log(((em.clientX - em.target.getBoundingClientRect().left) - em.target.getBoundingClientRect().width / 2) / em.target.offsetWidth)
        const valX =((em.clientX - em.target.getBoundingClientRect().left) - em.target.getBoundingClientRect().width / 2) / em.target.offsetWidth
        const valY =((em.clientY - em.target.getBoundingClientRect().top) - em.target.getBoundingClientRect().height / 2) / em.target.offsetHeight
        emoTL.current = gsap.timeline({});
        emoTL.current.to(em.target,{
             x:()=> valX * 16,
             y:()=> valY * 15,
             duration:1.3,
             ease:"expo.out"
         })
    }
    const emojiLeave = (e)=>{
      if(emoTL.current){emoTL.current.kill();}
        gsap.to(e.target,{
            x: 0,
            y: 0,
            duration:1.3,
            ease:"expo.out"
        })
    }

return(
    <>
        <section className="awards-preface" ref={el} onMouseMove={handleMove} onMouseLeave={handleLeave} >
            <div className="emoji-wrap">
                <div className="emoji" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji cup mob" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji medal " onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji gem mob" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji medal mob" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji medal" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
                <div className="emoji gem mob" onMouseMove={emojiMove} onMouseLeave={emojiLeave}></div>
            </div>
            <div className="text-wrap">
                <p>We won the world’s Best awards!</p>
            </div>
        </section>
    </>
)
}
export default AwardsPreface;
