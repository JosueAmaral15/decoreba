import "./ContentBlock.css"

export default function ContentBlock01(props){
    return(
        <section className="content-block">
            <img className="image" src={props.src} alt={props.alt} />
            <div className="text-layer">
                <h2 className="title">{props.title}</h2>
                <p className="text">{props.text}</p>
                <a href={props.href} className="text-button">{props.textButton}</a>
            </div>
        </section>
    )
}