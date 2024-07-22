import { useEffect } from "react";
import "./QuestionAnswer.css";
import {useState} from 'react';

export default function QuestionAnswer(props){
    const [isVisible, setIsVisible] = useState(false);
    function modifyVisibility(){
        if (isVisible)
            setIsVisible(false);
        else
            setIsVisible(true);
    }

    useEffect(()=>{
        const sr = ScrollReveal({
            origin:'top',
            duration:700,
            distance:'20px',
            delay:100,
            reset:false,
        })

        sr.reveal(`
            .question-answer-section .question-plus .question,
            .question-answer-section .question-plus .plus,
            .question-answer-section answer
        `)
    })

    return(
        <section className="question-answer-section">
            <div className="question-plus">
                <h3 className="question" onClick={modifyVisibility}>{props.question}</h3>
                <img className="plus" src="add.svg" width="50px" height="50px" onClick={modifyVisibility} />
            </div>
            <div className={`answer ${isVisible? 'visible' : 'hidden'}`}>{props.answer}</div>
        </section>
    )
}