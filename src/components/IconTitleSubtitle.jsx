import { useEffect } from "react";
import "./IconTitleSubtitle.css";
import ScrollReveal from "scrollreveal";

export default function IconTitleSubtitle(props){
    useEffect(()=>{
        const sr = ScrollReveal({
            origin: 'top',
            distance:'20px',
            duration:700,
            delay:100,
            reset:false,
        });

        sr.reveal(`
            section.icon-title-subtitle img,
            section.icon-title-subtitle h2,
            section.icon-title-subtitle p
        `)
    });

    return(
        <section className="icon-title-subtitle">
            <img src={props.src} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}