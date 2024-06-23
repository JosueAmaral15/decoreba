import "./css/style.css";
import "./css/responsivo.css";
import ContentBlock from "../../components/ContentBlock.jsx";
import IconTitleSubtitle from "../../components/IconTitleSubtitle.jsx";
import FourSeparateTexts from "../../components/FourSeparateTexts.jsx";
import TopHeaderTitleLinks from "../../components/TopHeaderTitleLinks.jsx"

const iconTitleSubtitleData = [
    {
        src:"/globo.svg",
        alt:"globo",
        title:"Metodologias incríveis",
        text:"Nossos usuários têm acesso a metodologias que funcionam para qualquer indivíduo durante todo o seu processo de aprendizado."
    },
    {
        src:"/padlock.svg",
        alt:"padlock",
        title:"Segurança dos seus dados",
        text:"Seus dados estarão mais seguros com a nossa política de segurança atualizada e com o nosso atual sistema de segurança."
    },
    {
        src:"/profile.svg",
        alt:"profile",
        title:"Plataforma completa de estudos",
        text:"Todo o nosso site é orientado para uma completa imersão de auxílio aos estudantes escolares e universitários."
    },
    {
        src:"/calendar.svg",
        alt:"calendar",
        title:"Organização individual dos estudos",
        text:"O livre acesso a ferramentas somado à capacidade de personalização do nosso sistema concede aos nossos usuários a possibilidade de organizar seus estudos da forma como desejam."
    },
]

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
    
]

export default function Home (){
    
    return (
        <>
            <TopHeaderTitleLinks />
            <main className="main-home">
                <div className="heading">
                    {/*<div className="title-marquee">*/}
                    <h1 className="title">Se dando bem nos estudos</h1>
                    {/*<marquee className="self-marquee-title"><h1 className="title2">Se dando bem nos estudos</h1></marquee>
                    </div>*/}
                    <p className="subtitle">Como faremos com que nossos usuários tenham um melhor aproveitamento da capacidade de sua memorização</p>
                    <button className="button-pattern-home">Acessar tutorial</button>
                </div>
                
                <ContentBlock
                    src="/professora.jpeg"
                    alt="imagem de uma professora em mangá" 
                    title="Experimente nossa plataforma" 
                    text="Uma vez acessada, a plataforma concede aos nossos usuários a possibilidade de ver na prática como funciona o processo de aprendizado. Experimente sem compromisso!" 
                    href="https://www.google.com.br"
                    textButton="Acessar plataforma"
                />
                <ContentBlock
                    src="/professor_artistico.jpeg"
                    alt="imagem de um professor dando aula" 
                    title="Tenha referências de estudos e memorização" 
                    text="Tenha acesso a uma coletânea de exemplos de estudos, templates e formas diferentes de estudar para melhorar seus rendimentos e aumentar as notas das avaliações." 
                    href="https://www.google.com.br"
                    textButton="Acessar exemplos"
                />
                <h2 className="offer">O que temos a oferecer</h2>
                <div className="icon-title-subtitle-div">
                    {iconTitleSubtitleData.map(function (item, index) {
                        return (<IconTitleSubtitle 
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        text={item.text}
                        key={`ITS${index}`}
                    />)})}
                </div>
                <section className="know-more">
                    <h2 className="before-study">Antes de estudar, use Decoreba</h2>
                    <p className="your-study-tool">Sua ferramenta de estudos personalizada</p>
                    <button className="button-pattern-home know-more-button">Quero saber mais</button>
                </section>
            </main>
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
        </>
    )
}