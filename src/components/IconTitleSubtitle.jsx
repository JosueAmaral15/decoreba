import "./IconTitleSubtitle.css";

export default function IconTitleSubtitle(props){
    return(
        <section className="icon-title-subtitle">
            <img src={props.src} alt={props.alt} />
            <h2>{props.title}</h2>
            <p>{props.text}</p>
        </section>
    )
}