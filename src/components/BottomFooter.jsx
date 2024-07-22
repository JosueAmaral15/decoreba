import { useEffect } from "react";
import "./BottomFooter.css";
import FourSeparateTexts from "./FourSeparateTexts.jsx";
import ScrollReveal from "scrollreveal";

const fourSeparateTextsData = [
    {
        title: "Plataforma",
        first: "Acesso à plataforma",
        linkFirst: "/",
        second: "Tutorial",
        linkSecond:"/",
        third: "Exemplos",
        linkThird: "/"
    },
    {
        title: "Sobre nós",
        first: "Quem somos",
        linkFirst: "/who_are_we",
        second: "Sobre",
        linkSecond: "/about",
        third: "Contato",
        linkThird: "/contact"
    }
    
];

export default function BottomFooter(){
    useEffect(() => {
        const sr = ScrollReveal({
            origin:"top",
            distance:"20px",
            duration:700,
            delay:100,
            reset:false,
        })
        sr.reveal(`
            .four-separate-texts-div,
            .header-social .header-branding-div
            .header-social .social-network-icons
        `)
    })

    return (
        <footer>
            <div className="four-separate-texts-div">
                {fourSeparateTextsData.map(function (item, index){
                    return (
                        <FourSeparateTexts
                            title={item.title}
                            first={item.first}
                            linkFirst={item.linkFirst}
                            second={item.second}
                            linkSecond={item.linkSecond}
                            third={item.third}
                            linkThird={item.linkThird}
                            key={`FST${index}`}
                        />
                    )
                })}
            </div>
            <div className="header-social">
                <div className="header-branding-div"><span className="header-branding">Decoreba</span></div>
                <div className="social-network-icons"><img src="/facebookIcon.svg" /><img src="/linkedInIcon.svg" /><img src="/youTubeIcon.svg" /><img src="/instagramIcon.svg" /></div>
            </div>
        </footer>
    )
}