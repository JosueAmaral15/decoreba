import "./css/style.css";
import "./css/responsive.css";
import TopHeader from "../../components/TopHeaderTitleLinks.jsx";
import TitlePriceButton from "../../components/TitlePriceButton.jsx";
import QuestionAnswer from "../../components/QuestionAnswer.jsx";
import BottomFooter from "../../components/BottomFooter.jsx";
import {useState} from 'react';
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";

const features = [
    {
        title: "Plano borracha branca",
        price: "grátis",
        secondPrice: "grátis",
        time: "",
        secondTime: "",
        contentFeatures: [
            "dois exemplos de estudos",
            "acesso a estatísticas simples",
            "organização e planejamento simples",
            "limite de três cadernos",
            "calendário padrão",
        ],
        messageButton: "selecionar"
    },
    {
        title: "Plano apontador bronzeado",
        price: "R$2,99",
        secondPrice: "R$33,99",
        time: "por mês",
        secondTime: "por ano",
        contentFeatures: [
            "dez exemplos de estudos",
            "acesso a estatísticas simples",
            "organização e planejamento simples",
            "limite de 12 cadernos",
            "calendário padrão",
            "serviço de atendimento simples",
            "comunicação com classes e professores de uma escola ou universidade"
        ],
        messageButton: "selecionar"
    },
    {
        title: "Plano lápis prateado",
        price: "R$5,99",
        secondPrice:"R$69,99",
        time: "por mês",
        secondTime: "por ano",
        contentFeatures: [
            "cinquenta exemplos de estudos",
            "acesso a estatísticas detalhadas",
            "organização e planejamento habitual",
            "limite de 50 cadernos",
            "calendário personalizado",
            "serviço de atendimento simples",
            "comunicação com classes e professores de escolas e universidades de uma nação"
        ],
        messageButton: "selecionar"
    },
    {
        title: "Plano caneta dourada",
        price: "R$7,99",
        secondPrice: "R$93,99",
        time: "por mês",
        secondTime: "por ano",
        contentFeatures:[
            "todos os exemplos de estudos disponíveis",
            "acesso a estatísticas mais detalhadas",
            "organização e planejamento complexo",
            "infinitos cadernos",
            "calendário personalizado",
            "serviço de atendimento diferenciado e prioritário",
            "possibilidade de ver e modificar configurações complexas da plataforma",
            "acesso às principais tendências de configuração do nosso negócio",
            "comunicação com classes e professores de escolas e universidades do mundo todo"
        ],
        messageButton: "selecionar"
    }
];

const questionAnswer = [
    {
        question: "Eu tenho direito a reembolso?",
        answer: "O reembolso está relacionado à devolução da primeira compra de um plano. Quando um cliente desejar o reembolso, ele deve fazê-lo dentro de um prazo de sete dias após a compra de um plano. Após o reembolso, o plano é cancelado. o cliente perde todos os benefícios do plano e não poderá assinar o mesmo plano por um prazo de trinta dias. Não haverá possibilidade de reembolso na próxima tentativa."
    },
    {
        question: "Eu posso mudar de plano?",
        answer: "Sim, o plano pode ser mudado, mas o cliente só pode realizar essa modificação trinta dias depois da compra de um plano ou após uma troca recente. A troca irá influenciar na mudança do valor do plano, mas esse valor só será modificado após o pagamento do plano anterior."
    },
    {
        question: "Posso cancelar um plano a qualquer momento?",
        answer: "Sim, o plano pode ser cancelado a qualquer momento, todavia o cliente deverá realizar o pagamento do plano cancelado no dia do pagamento, que deverá ser realizado dentro da data de validade."
    },
];

export default function Payment(){
    const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
    useEffect(() => {
        const sr = ScrollReveal({
            distance:'20px',
            duration: 700,
            origin: 'top',
            delay:100,
            reset:false,
        })

        sr.reveal(`
            .main-payment .price-table,
            .main-payment .heading-choose-needs,
            .main-payment .plans-panel-div .plans-panel,
            .main-payment .common-questions-section .common-questions
        `)
    },[])

    return (
        <>
            <TopHeader />
            <main className="main-payment">
                <h1 className="price-table">Tabela de Preços</h1>
                <h2 className="heading-choose-needs">Escolha o plano que mais combina com as suas necessidades</h2>
                <div className="plans-panel-div">
                    <div className="plans-panel">
                        <button className={`plans-buttons ${isMonthlyPlan && 'selected'}`} onClick={()=>{setIsMonthlyPlan(true)}}>Planos mensais</button>
                        <button className={`plans-buttons ${!isMonthlyPlan && 'selected'}`} onClick={()=>{setIsMonthlyPlan(false)}}>Planos anuais</button>
                    </div>
                </div>
                <section className="wrapper-title-price">
                    {features.map((item, index) => {
                        return (
                            <TitlePriceButton
                            title={item.title}
                            price={isMonthlyPlan? item.price : item.secondPrice}
                            time={isMonthlyPlan? item.time : item.secondTime}
                            messageButton={item.messageButton}
                            key={`TPB${index}`}
                            >
                                {item.contentFeatures.map((item2, index2) => {
                                    return (
                                        <li key={`TPBCF${index2}`}>{item2}</li>
                                    )})}
                            </TitlePriceButton>
                    )})}
                </section>
                <section className="common-questions-section">
                    <h1 className="common-questions">Perguntas frequentes</h1>
                    {questionAnswer.map((item, index) => {return (<QuestionAnswer question={item.question} answer={item.answer} key={`QA${index}`} />)})}
                </section>
            </main>
            <BottomFooter />
        </>
    )
}
