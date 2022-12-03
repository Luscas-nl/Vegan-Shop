import { useContext } from 'react'
import { AuthGoogleContext } from '../../../contexts/googleAuth'
import './Style.css'
import { Link } from 'react-router-dom'

function HeaderUser() {
    const { signed, user, logOff } = useContext(AuthGoogleContext)
    if(!signed){
        return(
            <div className='infobox loginBox'>
                <i className='fa fa-user'></i>
                <p>
                    Faça <Link to="/login" className='loginPlus'>Login</Link> <br />para continuar
                </p>
            </div>
        )
    } else {

        const logUser = JSON.parse(user)
        var strg = logUser.displayName
        var firstName = strg?.split(' ')[0];

        return(
            <div className="infobox userBox">
                <div className="userTextsBox">
                    <p className='userName'>{firstName}</p>
                    <p className="userOff" onClick={logOff}>Sair</p>
                </div>
                <i className='fa fa-user'></i>
            </div>
        )
    }
}

export default HeaderUser