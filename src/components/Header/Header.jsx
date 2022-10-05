import logo from '../../assets/Logo.jpg'
import './Header.css'

function Header(props) {

    return(
        <div className='headerBox'>
            <i class="fa fa-leaf logo"></i>

            <div className='infobox loginBox'>
                <i className='fa fa-user'></i>
                <p>
                    Faça <span className='loginPlus'>Login</span><br /> ou <span className='loginPlus'>Cadastre-se</span>
                </p>
            </div>

            <div className="boxSearch">
                <input className="searchBox" placeholder='O que está procurando?'>
                </input>
                <i className='fa fa-search'></i>
            </div>

            <div className='infobox loginCall'>
                <i className='fa fa-whatsapp'></i>
                <p>
                    Fale conosco <br /><span className='loginPlus'>(82) 99999-9999</span>
                </p>
            </div>

            <i className='fa fa-shopping-cart'></i>
        </div>
    )
}

export default Header