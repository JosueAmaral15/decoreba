import "./TopHeaderTitleLinks.css";
import {useState} from "react";

export default function TopHeaderTitleLinks(){
    const [isVisible, setIsVisible] = useState(false);
    return (
        <header className="top-main-header">
            <div className="header-buttons">
                <svg className="three-bars" width="50" height="60" onClick={()=>{setIsVisible(!isVisible)}}>
                    <line x1="10" y1="10" x2="44" y2="10" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                    <line x1="10" y1="21" x2="34" y2="21" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                    <line x1="10" y1="35" x2="44" y2="35" style={{stroke:"#000",strokeLinecap:"round",strokeWidth:4}} />
                </svg>
                <nav className="links-button">
                    <a href="#">home</a>
                    <a href="#">assinar</a>
                    <a href="#">sobre</a>
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
                    <a href="#">home</a>
                    <a href="#">assinar</a>
                    <a href="#">sobre</a>
                </div>
            </div>
        </header>
    )
}