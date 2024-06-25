import "./css/style.css";
import "./css/responsive.css"
import TopHeaderTitleLinks from "../../components/TopHeaderTitleLinks";
import BottomFooter from "../../components/BottomFooter";

export default function About(props){
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