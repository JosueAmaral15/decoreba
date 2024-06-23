import "./BottomFooter.css";
import FourSeparateTexts from "./FourSeparateTexts.jsx";

const fourSeparateTextsData = [
    {
        title: "Plataforma",
        first: "Acesso à plataforma",
        second: "Tutorial",
        third: "Exemplos"
    },
    {
        title: "Sobre nós",
        first: "Quem somos",
        second: "Sobre",
        third: "Contato"
    }
    
];

export default function BottomFooter(){
    return (
        <footer>
            <div className="four-separate-texts-div">
                {fourSeparateTextsData.map(function (item, index){
                    return (
                        <FourSeparateTexts
                            title={item.title}
                            first={item.first}
                            second={item.second}
                            third={item.third}
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