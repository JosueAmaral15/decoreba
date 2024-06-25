import "./css/style.css";
import "./css/responsive.css"
import TopHeaderTitleLinks from "../../components/TopHeaderTitleLinks";
import BottomFooter from "../../components/BottomFooter";

export default function About(){
    return (
        <>
            <TopHeaderTitleLinks />
            <div className="about-text-set">
                <div className="about-text-wrapper">
                    <h1 className="about-title">Sobre</h1>
                    <h2 className="objectives-reasons">Objetivos e motivos do site decoreba</h2>
                    <p className="about-full-text">Um dia nós fomos universitários e sabemos como é a vida de um estudante escolar e acadêmico. Nós temos a felicidade e a gratidão de oferecer aos usuários a possibilidade de aprender sobre como é que podem organizar os seus estudos e adquirir capacidade de memorizar quaisquer textos, frases, números e equações com a força do pensamento e com os nossos aplicativos. A mente do ser humano guarda uma grande capacidade de memorização e é possível aproveitar dessa capacidade para que uma pessoa consiga aprender a memorizar coisas que antes poderiam ser difíceis de memorização. Com os nossos serviços podemos facilitar a vida dos usuários em seus estudos ensinando como deve ser realizada a memorização e gerenciando o tempo e a rotina de estudos de forma a fazer com que o estudante consiga ter aproveitamento e maiores rendimentos naquilo que está estudando e aprendendo. Vamos pegar pela sua mão e direcionar a sua mente para que o usuário consiga aprender e memorizar uma coisa no menor tempo possível, dando ferramentas, instruções e métodos de estudo que funcionaram para a gente.</p>
                </div>
                <img className="about-img" src="professora.jpeg" alt="professora com uma caneta na mão estilo mangá" />

            </div>
            <BottomFooter />
        </>
        
    )
}