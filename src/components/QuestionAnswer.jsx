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
    return(
        <section className="question-answer-section">
            <div className="question-plus">
                <h3 className="question" onClick={modifyVisibility}>{props.question}</h3>
                <img className="plus" src="add.svg" onClick={modifyVisibility} />
            </div>
            <div className={`answer ${isVisible? 'visible' : 'hidden'}`}>{props.answer}</div>
        </section>
    )
}