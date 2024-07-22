import "./TopHeaderTitleLinks.css";
import {useState, useEffect} from "react";
import { Link } from 'react-router-dom';
import ScrollReveal from "scrollreveal";

export default function TopHeaderTitleLinks(){
    const [isVisible, setIsVisible] = useState(false);

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:'top',
            duration:700,
            delay:100,
            distance:'20px',
            reset:false,
        });

        sr.reveal(`
            .header-buttons .three-bars,
            .header-buttons .links-button,
            .header-branding-div .header-branding,
            .modal-links .close-wrapper,
            .modal-links .links-button
        `, {
            interval:200
        });
    });

    return (
        <header className="top-main-header">
            <div className="header-buttons">
                <svg className="three-bars" width="50" height="60" onClick={()=>{setIsVisible(!isVisible)}}>
                    <line x1="10" y1="10" x2="44" y2="10" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                    <line x1="10" y1="21" x2="34" y2="21" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                    <line x1="10" y1="35" x2="44" y2="35" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                </svg>
                <nav className="links-button">
                    <Link to="/">home</Link>
                    <Link to="/subscriptions">assinar</Link>
                    <Link to="/about">sobre</Link>
                    <button href="#">sign up</button>
                </nav>
            </div>
            <div className="header-branding-div">
                <h1 className="header-branding">Decoreba</h1>
            </div>
            <div className={`modal-links ${isVisible && "visible"}`}>
                <div className="close-wrapper">
                    <img onClick={()=>{setIsVisible(false)}} className="close-img" src="close.svg" alt="close button" />
                </div>
                <div className="links-button">
                    <Link to="/">home</Link>
                    <Link to="/subscriptions">assinar</Link>
                    <Link to="/about">sobre</Link>
                </div>
            </div>
        </header>
    )
}