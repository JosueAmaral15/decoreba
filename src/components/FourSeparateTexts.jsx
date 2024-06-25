import "./FourSeparateTexts.css";
import {Link} from "react-router-dom";

export default function FourSeparateTexts(props){
    return(
        <section className="four-separate-texts">
            <p className="title">{props.title}</p>
            <Link className="text" to={props.linkFirst}><p className="text">{props.first}</p></Link>
            <Link className="text" to={props.linkSecond}><p className="text">{props.second}</p></Link>
            <Link className="text" to={props.linkThird}><p className="text">{props.third}</p></Link>
        </section>
    )
}