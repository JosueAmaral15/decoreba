import { useEffect } from "react";
import "./TitlePriceButton.css";
import ScrollReveal from "scrollreveal";

export default function TitlePriceButton(props){
    useEffect(()=>{
        const sr = ScrollReveal({
            origin: "top",
            duration: 700,
            distance: "20px",
            delay: 100,
            reset: false,
        })

        sr.reveal(`
            .title-price-button .wrapper-title-button .plan-title,
            .title-price-button .wrapper-title-button .price-time,
            .title-price-button .wrapper-title-button .unordered-list-features,
            .title-price-button .wrapper-title-button .button-select-price
        `)
    })

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