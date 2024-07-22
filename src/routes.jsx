import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import Contact from "./pages/Contact";
import Login from "./pages/login-page";
import About from "./pages/About";


const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/subscriptions" element={<Payment/>} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/about" element={<About title="Sobre" subtitle="Objetivos e motivos do site decoreba" text="Um dia nós fomos universitários e sabemos como é a vida de um estudante escolar e acadêmico. Nós temos a felicidade e a gratidão de oferecer aos usuários a possibilidade de aprender sobre como é que podem organizar os seus estudos e adquirir capacidade de memorizar quaisquer textos, frases, números e equações com a força do pensamento e com os nossos aplicativos. A mente do ser humano guarda uma grande capacidade de memorização e é possível aproveitar dessa capacidade para que uma pessoa consiga aprender a memorizar coisas que antes poderiam ser difíceis de memorização. Com os nossos serviços podemos facilitar a vida dos usuários em seus estudos ensinando como deve ser realizada a memorização e gerenciando o tempo e a rotina de estudos de forma a fazer com que o estudante consiga ter aproveitamento e maiores rendimentos naquilo que está estudando e aprendendo. Vamos pegar pela sua mão e direcionar a sua mente para que o usuário consiga aprender e memorizar uma coisa no menor tempo possível, dando ferramentas, instruções e métodos de estudo que funcionaram para a gente." src="professor realista.jpeg" alt="professora com uma caneta na mão estilo mangá" />} />
                <Route exact path="/who_are_we" element={<About title="Quem somos" subtitle="Quem é o autor do site" text="Meu nome é Josué Amaral e eu sou o responsável pela elaboração de todo o site. Sou desenvolvedor front-end e meu objetivo com esse site é atender às demandas mais necessárias que os estudantes precisam para continuar com os seus estudos escolares e acadêmicos. Aqui é possível aprender muitas coisas e adquirir experiências com professores e especialistas. Eu estudo e pratico programação e desenvolvimento web todos os dias. Estou buscando exercer a profissão como desenvolvedor com a maior excelência possível! Meu foco é atender às necessidades das pessoas e à demanda na área de programação e tecnologia. Como existe muita demanda na área de tecnologia, penso que o momento é perfeito para fornecer serviços e produtos compatíveis com as expectativas dos clientes e com o desejo e necessidades de quem mais precisa." src="josue.jpg" alt="desenvolvedor de software e autor do site chamado Josué com terno e gravata" />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;