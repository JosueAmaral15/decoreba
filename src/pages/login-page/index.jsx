import "./css/style.css";

export default function LoginPage(){
    return(
        <>
            <header className="header-login"><h1 className="header-branding-login">Decoreba</h1></header>
            <main className="main-login">
                <div className="create-account-subscribe-text">
                    <h1 className="create-account-text">Crie uma conta</h1>
                    <p className="use-subscribe-text">Use seu e-mail para se inscrever</p>
                </div>
                <div className="login-part">
                    <input className="email-login" type="text" name="email-login" placeholder="meuemail@dominio.com" />
                    <button className="subscribe-button">Inscrever-se com e-mail</button>
                    <p>Ou continue com</p>
                    <div className="google-button"><img className="google-logo" src="google.svg" alt="Logo do google" /><span className="google-text">Google</span></div>
                </div>
            </main>
        </>
        
    )
}