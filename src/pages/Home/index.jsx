import "./css/style.css";
import "./css/responsivo.css";
import ContentBlock from "../../components/ContentBlock.jsx";
import IconTitleSubtitle from "../../components/IconTitleSubtitle.jsx";
import TopHeaderTitleLinks from "../../components/TopHeaderTitleLinks.jsx";
import BottomFooter from "../../components/BottomFooter.jsx";
import {useEffect} from 'react';

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
];

const contentBlockData = [
    {
        src:"/professora.jpeg",
        alt:"imagem de uma professora em mangá" ,
        title:"Experimente nossa plataforma" ,
        text:"Uma vez acessada, a plataforma concede aos nossos usuários a possibilidade de ver na prática como funciona o processo de aprendizado. Experimente sem compromisso!" ,
        href:"/",
        textButton:"Acessar plataforma"
    },
    {
        src:"/professor_artistico.jpeg",
        alt:"imagem de um professor dando aula",
        title:"Tenha referências de estudos e memorização",
        text:"Tenha acesso a uma coletânea de exemplos de estudos, templates e formas diferentes de estudar para melhorar seus rendimentos e aumentar as notas das avaliações." ,
        href:"/",
        textButton:"Acessar exemplos"
    }
]

export default function Home (){

    useEffect(() => {
        const sr = ScrollReveal({
            origin:'top',
            distance:'20px',
            duration: 1000,
            delay:100,
            reset:false,
        });

        sr.reveal(`
            main.main-home .heading .title,
            main.main-home .heading .subtitle,
            main.main-home .heading button,
            .offer,
            .know-more .before-study,
            .know-more .your-study-tool,
            .know-more button
        `)
    })

    return (
        <>
            <TopHeaderTitleLinks />
            <main className="main-home">
                <section className="heading">
                    <h1 className="title">Se dando bem nos estudos</h1>
                    <p className="subtitle">Como faremos com que nossos usuários tenham um melhor aproveitamento da capacidade de sua memorização</p>
                    <button className="button-pattern-home">Acessar tutorial</button>
                </section>
                
                {contentBlockData.map((item, index)=>{return (
                    <ContentBlock
                        src={item.src}
                        alt={item.alt}
                        title={item.title}
                        text={item.text}
                        href={item.href}
                        textButton={item.textButton}
                        key={`CB${index}`}
                    />
                )})}
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
            <BottomFooter />
        </>
    )
}