import './Style.css'
import { Link, Navigate } from 'react-router-dom'
import { useContext } from 'react'
import { AuthGoogleContext } from '../../contexts/googleAuth'

function Login() {

    const { signed, signInGoogle } = useContext(AuthGoogleContext)

    if(!signed){
        return(
            <div className="Login">
                <div className="loginBox">
                    <div className="loginInner">
                        <div className="loginTitle">Login</div>
                        <p className="loginDesc">Faça login para acessar outras funcionalidades do site</p>
                        <div className="loginBut" onClick={signInGoogle}>
                            <i class="fa fa-google" aria-hidden="true"></i>
                            <p>Fazer login com o google</p>
                        </div>
                        <div className="checkLoginBox">
                            <input type="checkbox" id='checkLogin' className='checkLogin' />
                            <label htmlFor='checkLogin'>Lembrar de mim</label>
                        </div>
                    </div>
    
                    <span className="loginSeparator"></span>
    
                    <div className="rightLogin">
                        <Link to="/" className="backLogin">
                            <i class="fa fa-caret-left" aria-hidden="true"></i>
                            <p>Voltar</p>
                        </Link>
                        <p className="shopNameLogin">Vegan<br />Shop.</p>
                    </div>
                </div>
            </div>
        )
    } else {
        return <Navigate to="/" />
    }
}

export default Login