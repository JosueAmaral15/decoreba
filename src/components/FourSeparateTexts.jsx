import "./FourSeparateTexts.css";

export default function FourSeparateTexts(props){
    return(
        <section className="four-separate-texts">
            <p className="title">{props.title}</p>
            <p className="text">{props.first}</p>
            <p className="text">{props.second}</p>
            <p className="text">{props.third}</p>
        </section>
    )
}