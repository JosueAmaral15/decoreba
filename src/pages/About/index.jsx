import "./css/style.css";
import "./css/responsive.css"
import TopHeaderTitleLinks from "../../components/TopHeaderTitleLinks";
import BottomFooter from "../../components/BottomFooter";
import {useEffect} from 'react';
import ScrollReveal from "scrollreveal";

export default function About(props){
    useEffect(()=>{
        const sr = ScrollReveal({
            origin:'top',
            duration: 700,
            delay:100,
            distance:'50px',
            reset:false,
        })
        sr.reveal(`
            .about-text-set .about-img,
            .about-text-set .about-text-wrapper .about-title,
            .about-text-set .about-text-wrapper .objectives-reasons,
            .about-text-set .about-text-wrapper .about-full-text
        `)
    })

    return (
        <>
            <TopHeaderTitleLinks />
            <div className="about-text-set">
                <div className="about-text-wrapper">
                    <h1 className="about-title">{props.title}</h1>
                    <h2 className="objectives-reasons">{props.subtitle}</h2>
                    <p className="about-full-text">{props.text}</p>
                </div>
                <img className="about-img" src={props.src} alt={props.alt} />
            </div>
            <BottomFooter />
        </>
        
    )
}