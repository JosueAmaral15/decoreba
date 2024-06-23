import "./TitlePriceButton.css";

export default function TitlePriceButton(props){
    return(
        <section className="title-price-button">
            <div className="wrapper-title-button">
                <h3 className="plan-title">{props.title}</h3>
                <span className="price-time"><span className="plan-price">{props.price}</span><span className="plan-time">{props.time}</span></span>
                <ul className="unordered-list-features">{props.children}</ul>
                <button className="button-select-price">{props.messageButton}</button>
            </div>
        </section>
    );
}