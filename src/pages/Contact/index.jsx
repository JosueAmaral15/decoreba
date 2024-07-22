import "./css/style.css";
import "./css/responsive.css";
import TopHeader from "../../components/TopHeaderTitleLinks.jsx";
import BottomFooter from "../../components/BottomFooter.jsx";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const userTextData = [
    {
        title: "Primeiro nome",
        placeholder: "Jane...",
        name: "first-name"
    },
    {
        title: "Último nome",
        placeholder: "Smith...",
        name: "last-name"
    },
    {
        title: "Endereço de e-mail",
        placeholder: "email@dominio.com...",
        name: "e-mail"
    }
]

export default function Contatos(){

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:'top',
            duration:700,
            delay:100,
            distance:'20px',
            reset:false,
        })

        sr.reveal(`
            main.main-contact .title-user-data-button .contact-header .contact-us,
            main.main-contact .title-user-data-button .contact-header .enter-contact,
            main.main-contact .title-user-data-button .contact-header .contact-img,
            main.main-contact .title-user-data-button .contact-form .title-usertext,
            main.main-contact .title-user-data-button .contact-form .data-title,
            main.main-contact .title-user-data-button .contact-form user-data,
            main.main-contact .title-user-data-button .contact-form .user-message,
            main.main-contact .title-user-data-button .contact-form .submit-button,
            main.main-contact .contact-img2
        `)
    },[])

    return (
        <>
            <TopHeader />
            <main className="main-contact">
                <div className="title-user-data-button">
                    <section>
                        <div className="contact-header">
                            <h1 className="contact-us">Contate-nos</h1>
                            <p className="enter-contact">Entre em contato conosco</p>
                            <img className="contact-img" src="atendente-de-telemarketing.jpg" alt="atendente de telemarketing de óculos, cabelo marrom e com um headset na cabeça" />
                        </div>
                    </section>
                    <form className="contact-form" method="POST" action="">
                        {userTextData.map((item, index)=>{return (
                            <div className="title-usertext" key={`CD${index}`}>
                                <p className="data-title">{item.title}</p>
                                <input className="user-data" type="text" placeholder={item.placeholder} />
                            </div>
                        )})}
                        <p className="data-title">Mensagem</p>
                        <textarea className="user-message" rows="4" cols="50" placeholder="Digite a sua pergunta ou mensagem..."></textarea>
                        <input className="submit-button" type="submit" value="Enviar" />
                    </form>
                </div>
                <img className="contact-img2" src="atendente-de-telemarketing.jpg" alt="atendente de telemarketing de óculos, cabelo marrom e com um headset na cabeça" />
            </main>
            <BottomFooter />
        </>
    )
}