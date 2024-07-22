import "./ContentBlock.css"
import ScrollReveal from "scrollreveal"
import {useEffect} from 'react';
import {Link} from "react-router-dom";

export default function ContentBlock01(props){
    useEffect(()=>{
        const sr = ScrollReveal({
            origin:"top",
            distance: "20px",
            duration: 700,
            delay: 100,
            reset:false,
        });

        sr.reveal(`
            .content-block .image,
            .content-block .text-layer,
            .content-block .title,
            .content-block text,
            .content-block .text-button
        `)
    })

    return(
        <section className="content-block">
            <img className="image" src={props.src} alt={props.alt} />
            <div className="text-layer">
                <h2 className="title">{props.title}</h2>
                <p className="text">{props.text}</p>
                <Link to={props.href} className="text-button">{props.textButton}</Link>
            </div>
        </section>
    )
}